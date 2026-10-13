const firstSelect = document.getElementById('first-disease');
const secondSelect = document.getElementById('second-disease');

function normalize(value) {
  return String(value).trim().toLocaleLowerCase();
}

function entryName(entry) {
  return typeof entry === 'string' ? entry : entry.name;
}

function comparisonText(value) {
  return normalize(value)
    .replace(/[()]/g, ' ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/\belectromy(?:ography|ogram)\b/g, 'emg')
    .replace(/\bsingle fiber\b/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function textSimilarity(first, second) {
  const firstText = comparisonText(first);
  const secondText = comparisonText(second);
  const previous = Array.from({ length: secondText.length + 1 }, (_, index) => index);

  for (let firstIndex = 1; firstIndex <= firstText.length; firstIndex++) {
    let diagonal = previous[0];
    previous[0] = firstIndex;
    for (let secondIndex = 1; secondIndex <= secondText.length; secondIndex++) {
      const above = previous[secondIndex];
      const cost = firstText[firstIndex - 1] === secondText[secondIndex - 1] ? 0 : 1;
      previous[secondIndex] = Math.min(
        previous[secondIndex] + 1,
        previous[secondIndex - 1] + 1,
        diagonal + cost
      );
      diagonal = above;
    }
  }

  const longest = Math.max(firstText.length, secondText.length);
  return longest === 0 ? 1 : 1 - previous[secondText.length] / longest;
}

function keywordOverlap(first, second) {
  const stopWords = new Set(['the', 'and', 'for', 'with', 'from', 'that', 'this']);
  const firstWords = new Set(comparisonText(first).split(' ').filter(word => word.length > 2 && !stopWords.has(word)));
  const secondWords = new Set(comparisonText(second).split(' ').filter(word => word.length > 2 && !stopWords.has(word)));
  const union = new Set([...firstWords, ...secondWords]);
  if (union.size === 0) return false;
  const overlap = [...firstWords].filter(word => secondWords.has(word)).length / union.size;
  return overlap >= 0.35;
}

function isFuzzyMatch(first, second) {
  const similarity = textSimilarity(first, second);
  return similarity >= 0.72 || (similarity >= 0.55 && keywordOverlap(first, second));
}

function findSharedValues(firstValues, secondValues) {
  const genericLabels = new Set(['other causes', 'later symptoms']);
  return (firstValues || [])
    .filter(value => !genericLabels.has(normalize(entryName(value))))
    .filter(value => (secondValues || []).some(other =>
      normalize(entryName(value)) === normalize(entryName(other))
    ))
    .map(entryName);
}

function findSharedEntries(firstEntries, secondEntries) {
  const genericLabels = new Set(['other causes', 'later symptoms']);
  const first = (firstEntries || []).filter(entry => !genericLabels.has(normalize(entryName(entry))));
  const second = (secondEntries || []).filter(entry => !genericLabels.has(normalize(entryName(entry))));
  const usedFirst = new Set();
  const usedSecond = new Set();
  const values = [];
  const hideFirst = new Set();
  const hideSecond = new Set();

  first.forEach((entry, firstIndex) => {
    const secondIndex = second.findIndex((other, index) =>
      !usedSecond.has(index) && normalize(entryName(entry)) === normalize(entryName(other))
    );
    if (secondIndex === -1) return;

    const other = second[secondIndex];
    values.push({ matchType: 'exact', label: entryName(entry), firstEntry: entry, secondEntry: other });
    usedFirst.add(firstIndex);
    usedSecond.add(secondIndex);
    hideFirst.add(entry);
    hideSecond.add(other);
  });

  first.forEach((entry, firstIndex) => {
    if (usedFirst.has(firstIndex)) return;
    let bestMatch = null;
    second.forEach((other, secondIndex) => {
      if (usedSecond.has(secondIndex) || !isFuzzyMatch(entryName(entry), entryName(other))) return;
      const score = textSimilarity(entryName(entry), entryName(other));
      if (!bestMatch || score > bestMatch.score) bestMatch = { other, secondIndex, score };
    });
    if (!bestMatch) return;

    values.push({
      matchType: 'fuzzy',
      label: entryName(entry),
      firstEntry: entry,
      secondEntry: bestMatch.other
    });
    usedFirst.add(firstIndex);
    usedSecond.add(bestMatch.secondIndex);
    hideFirst.add(entry);
    hideSecond.add(bestMatch.other);
  });

  first.forEach((entry, firstIndex) => {
    if (usedFirst.has(firstIndex)) return;
    (entry.comparisonTags || []).forEach(tag => {
      second.forEach((other, secondIndex) => {
        if (usedSecond.has(secondIndex)) return;
        const matchingTag = (other.comparisonTags || []).find(otherTag => otherTag.id === tag.id);
        if (!matchingTag) return;

        values.push({
          matchType: 'tag',
          label: tag.label,
          firstEntry: entry,
          secondEntry: other,
          explanation: tag.explanation || matchingTag.explanation || 'These entries use different wording but share a curated comparison tag.'
        });
        usedSecond.add(secondIndex);
      });
    });
  });

  return { values, hideFirst, hideSecond };
}

function getTreatments(disease) {
  return Object.values(disease.treatments || {}).flat();
}

function findTreatmentMatches(first, second) {
  const firstTreatments = first.treatments || {};
  const secondTreatments = second.treatments || {};
  const matches = { values: [], hideFirst: new Set(), hideSecond: new Set() };

  Object.keys(firstTreatments).forEach(type => {
    const result = findSharedEntries(firstTreatments[type], secondTreatments[type] || []);
    matches.values.push(...result.values);
    result.hideFirst.forEach(entry => matches.hideFirst.add(entry));
    result.hideSecond.forEach(entry => matches.hideSecond.add(entry));
  });

  return matches;
}

function createDisclosure(summaryContent, bodyContent, className) {
  const details = document.createElement('details');
  details.className = className;

  const summary = document.createElement('summary');
  const label = document.createElement('span');
  label.className = 'disclosure-label';
  if (typeof summaryContent === 'string') {
    label.textContent = summaryContent;
  } else {
    label.append(summaryContent);
  }

  const arrow = document.createElement('i');
  arrow.className = 'fas fa-chevron-right disclosure-arrow';
  arrow.setAttribute('aria-hidden', 'true');
  summary.append(label, arrow);
  details.append(summary);

  if (bodyContent) {
    const body = document.createElement('div');
    body.className = 'disclosure-body';
    body.append(bodyContent);
    details.append(body);
  }

  return details;
}

function createEntryExplanation(entry) {
  const content = document.createElement('div');
  if (typeof entry !== 'string' && entry.explanation) {
    const explanation = document.createElement('p');
    explanation.textContent = entry.explanation;
    content.append(explanation);
  }
  return content;
}

function appendSection(container, title, values) {
  if (Array.isArray(values) && values.length === 0) return;

  const section = document.createElement('section');
  section.className = 'disease-section';

  const heading = document.createElement('h4');
  heading.textContent = title;
  section.append(heading);

  if (Array.isArray(values)) {
    const list = document.createElement('ul');
    values.forEach(value => {
      const item = document.createElement('li');
      item.append(createDisclosure(entryName(value), createEntryExplanation(value), 'entry-disclosure'));
      list.append(item);
    });
    section.append(list);
  } else {
    const text = document.createElement('p');
    text.textContent = values;
    section.append(text);
  }

  container.append(section);
}

function appendSimilarityDetails(details, value) {
  const explanation = document.createElement('div');
  explanation.className = 'similarity-explanation';

  if (value.matchType === 'tag') {
    const intro = document.createElement('p');
    intro.textContent = 'Related wording: Compare how each disease entry describes this concept.';
    explanation.append(intro);
    [[value.firstEntry, value.firstDiseaseName], [value.secondEntry, value.secondDiseaseName]]
      .forEach(([entry, diseaseName]) => {
        const comparison = document.createElement('div');
        comparison.className = 'related-entry-explanation';
        const diseaseLabel = document.createElement('strong');
        diseaseLabel.textContent = `${diseaseName}: ${entryName(entry)}`;
        comparison.append(diseaseLabel);
        const entryExplanation = typeof entry === 'string' ? '' : entry.explanation || '';
        if (entryExplanation) {
          const paragraph = document.createElement('p');
          paragraph.textContent = entryExplanation;
          comparison.append(paragraph);
        }
        explanation.append(comparison);
      });
    if (value.explanation) {
      const note = document.createElement('p');
      note.className = 'comparison-tag-note';
      note.textContent = value.explanation;
      explanation.append(note);
    }
  } else {
    explanation.textContent = value.matchType === 'fuzzy'
      ? `These entries were grouped as similar wording: “${entryName(value.firstEntry)}” and “${entryName(value.secondEntry)}”.`
      : `Both diseases list “${value.label}”.`;
  }

  details.append(explanation);
}

function createSimilarityDisclosure(value, first, second) {
  value.firstDiseaseName = first.name;
  value.secondDiseaseName = second.name;

  let summaryContent;
  if (value.matchType === 'exact') {
    summaryContent = value.label;
  } else if (value.matchType === 'fuzzy') {
    summaryContent = `${entryName(value.firstEntry)} (similar wording to ${entryName(value.secondEntry)})`;
  } else {
    const relatedLabel = document.createElement('span');
    relatedLabel.className = 'related-match-label';
    relatedLabel.append(document.createTextNode(`${value.label} `));
    const wording = document.createElement('span');
    wording.textContent = '(related wording)';
    relatedLabel.append(wording);
    summaryContent = relatedLabel;
  }

  const content = document.createElement('div');
  appendSimilarityDetails(content, value);
  return createDisclosure(summaryContent, content, 'similarity-disclosure');
}

function appendSimilarities(first, second, comparisons) {
  const container = document.getElementById('similarities');
  container.replaceChildren();
  const shared = comparisons.filter(([, values]) => values.length > 0);

  if (shared.length === 0) {
    const message = document.createElement('p');
    message.className = 'empty-state';
    message.textContent = 'No shared entries found in the available comparison data.';
    container.append(message);
    return;
  }

  shared.forEach(([title, values]) => {
    const section = document.createElement('section');
    section.className = 'similarity-section';
    const heading = document.createElement('h4');
    heading.textContent = title;
    section.append(heading);

    const list = document.createElement('ul');
    values.forEach(value => {
      const item = document.createElement('li');
      item.append(createSimilarityDisclosure(value, first, second));
      list.append(item);
    });
    section.append(list);
    container.append(section);
  });
}

function renderComparison() {
  const first = diseases.find(disease => disease.id === firstSelect.value);
  const second = diseases.find(disease => disease.id === secondSelect.value);
  if (!first) return;

  const infoUrl = id => `../Info%20HTML%20+%20CSS%20holder/info.html?diseaseId=${encodeURIComponent(id)}`;
  const firstTitle = document.getElementById('first-title');
  const secondTitle = document.getElementById('second-title');
  firstTitle.replaceChildren();
  secondTitle.replaceChildren();

  [[firstTitle, first], ...(second ? [[secondTitle, second]] : [])].forEach(([heading, disease]) => {
    const link = document.createElement('a');
    link.className = 'disease-link';
    link.href = infoUrl(disease.id);
    link.textContent = disease.name;
    heading.append(link);
  });

  document.getElementById('comparison-title').textContent = second
    ? `Comparing ${first.name} with ${second.name}`
    : `Comparing ${first.name}`;
  const firstDetails = document.getElementById('first-details');
  const secondDetails = document.getElementById('second-details');
  firstDetails.replaceChildren();
  secondDetails.replaceChildren();

  if (!second) {
    const prompt = document.createElement('p');
    prompt.className = 'empty-state';
    prompt.textContent = 'Select a disease to compare.';
    secondTitle.textContent = 'Select a disease';
    secondDetails.append(prompt.cloneNode(true));
    document.getElementById('similarities').replaceChildren(prompt);
    appendSection(firstDetails, 'Category', first.category);
    appendSection(firstDetails, 'Age of onset', first.ageOfOnset);
    appendSection(firstDetails, 'Causes', first.causes);
    appendSection(firstDetails, 'Symptoms', first.symptoms);
    appendSection(firstDetails, 'Treatments', getTreatments(first));
    appendSection(firstDetails, 'Diagnosis', first.diagnosis);
    return;
  }

  const causeMatches = findSharedEntries(first.causes, second.causes);
  const symptomMatches = findSharedEntries(first.symptoms, second.symptoms);
  const treatmentMatches = findTreatmentMatches(first, second);
  const diagnosisMatches = findSharedEntries(first.diagnosis, second.diagnosis);
  const sameCategory = normalize(first.category) === normalize(second.category);
  const sameAgeOfOnset = normalize(first.ageOfOnset) === normalize(second.ageOfOnset);

  [[firstDetails, first], ...(second ? [[secondDetails, second]] : [])].forEach(([container, disease]) => {
    const isFirst = disease.id === first.id;
    const hideCauses = isFirst ? causeMatches.hideFirst : causeMatches.hideSecond;
    const hideSymptoms = isFirst ? symptomMatches.hideFirst : symptomMatches.hideSecond;
    const hideTreatments = isFirst ? treatmentMatches.hideFirst : treatmentMatches.hideSecond;
    const hideDiagnosis = isFirst ? diagnosisMatches.hideFirst : diagnosisMatches.hideSecond;

    if (!sameCategory) appendSection(container, 'Category', disease.category);
    if (!sameAgeOfOnset) appendSection(container, 'Age of onset', disease.ageOfOnset);
    appendSection(container, 'Causes', disease.causes.filter(entry => !hideCauses.has(entry)));
    appendSection(container, 'Symptoms', disease.symptoms.filter(entry => !hideSymptoms.has(entry)));
    appendSection(container, 'Treatments', getTreatments(disease).filter(entry => !hideTreatments.has(entry)));
    appendSection(container, 'Diagnosis', disease.diagnosis.filter(entry => !hideDiagnosis.has(entry)));
  });

  const categoryMatches = sameCategory
    ? [{ matchType: 'exact', label: first.category, firstEntry: first.category, secondEntry: second.category }]
    : [];
  const ageMatches = sameAgeOfOnset
    ? [{ matchType: 'exact', label: first.ageOfOnset, firstEntry: first.ageOfOnset, secondEntry: second.ageOfOnset }]
    : [];
  appendSimilarities(first, second, [
    ['Category', categoryMatches],
    ['Causes', causeMatches.values],
    ['Symptoms', symptomMatches.values],
    ['Treatments', treatmentMatches.values],
    ['Diagnosis', diagnosisMatches.values],
    ['Age of onset', ageMatches]
  ]);
}

function populateSelect(select, selectedId, placeholder) {
  if (placeholder) {
    const option = document.createElement('option');
    option.value = '';
    option.textContent = placeholder;
    option.disabled = true;
    option.selected = true;
    select.append(option);
  }

  diseases.forEach(disease => {
    const option = document.createElement('option');
    option.value = disease.id;
    option.textContent = disease.name;
    select.append(option);
  });
  if (diseases.some(disease => disease.id === selectedId)) {
    select.value = selectedId;
  }
}

const params = new URLSearchParams(window.location.search);
const requestedFirst = params.get('diseaseId');
const requestedSecond = params.get('compareId');
const defaultFirst = diseases.some(disease => disease.id === requestedFirst)
  ? requestedFirst
  : diseases[0].id;

populateSelect(firstSelect, defaultFirst);
populateSelect(secondSelect, diseases.some(disease => disease.id === requestedSecond) && requestedSecond !== defaultFirst
  ? requestedSecond
  : '', 'Select Disease');
firstSelect.addEventListener('change', () => {
  if (firstSelect.value === secondSelect.value) {
    secondSelect.value = '';
  }
  renderComparison();
});
secondSelect.addEventListener('change', () => {
  if (secondSelect.value === firstSelect.value) {
    secondSelect.value = '';
  }
  renderComparison();
});
renderComparison();
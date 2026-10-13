// info-script.js

// Wait for DOM to load AND data.js to be available
function waitForData(callback) {
  if (typeof diseases !== 'undefined') {
    callback();
  } else {
    setTimeout(() => waitForData(callback), 100);
  }
}

// Get disease ID from URL parameter
function getDiseaseIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('diseaseId');
}

// Find disease by ID
function getDisease(diseaseId) {
  return diseases.find(d => d.id === diseaseId);
}

function renderOverview(elementId, text) {
  const overview = document.getElementById(elementId);
  overview.textContent = text || '';
  overview.hidden = !overview.textContent.trim();
}

function renderEntries(list, entries) {
  list.replaceChildren();

  (entries || []).forEach(entry => {
    const item = document.createElement('li');
    if (typeof entry === 'string') {
      item.textContent = entry;
    } else {
      const name = document.createElement('strong');
      name.textContent = entry.name;
      item.append(name);

      if (entry.explanation) {
        const explanation = document.createElement('p');
        explanation.textContent = entry.explanation;
        item.append(explanation);
      }
    }
    list.append(item);
  });
}

function renderTreatments(container, treatments) {
  container.replaceChildren();

  const sectionTitles = {
    medication: { label: 'Medications', icon: 'fa-pills' },
    therapy: { label: 'Therapies', icon: 'fa-person-walking' },
    surgery: { label: 'Surgery', icon: 'fa-user-doctor' },
    lifestyle: { label: 'Lifestyle', icon: 'fa-leaf' }
  };

  Object.entries(sectionTitles).forEach(([key, section]) => {
    const entries = treatments[key] || [];
    if (entries.length === 0) return;

    const heading = document.createElement('h3');
    heading.className = 'treatment-subheading';
    const icon = document.createElement('i');
    icon.className = `fas ${section.icon}`;
    icon.setAttribute('aria-hidden', 'true');
    const label = document.createElement('span');
    label.textContent = section.label;
    heading.append(icon, label);
    const list = document.createElement('ul');
    renderEntries(list, entries);
    container.append(heading, list);
  });
}

// Populate page with disease data
function loadDiseaseInfo() {
  const diseaseId = getDiseaseIdFromURL();
  
  if (!diseaseId) {
    console.error('No diseaseId found in URL');
    return;
  }

  const disease = getDisease(diseaseId);

  if (!disease) {
    console.error('Disease not found:', diseaseId);
    document.body.innerHTML = '<p>Disease not found.</p>';
    return;
  }

  const sourceList = document.getElementById('sources-list');
  sourceList.replaceChildren();

  (disease.sources || []).forEach(source => {
    const item = document.createElement('li');
    const link = document.createElement('a');
    const icon = document.createElement('i');
    const label = document.createElement('span');

    icon.className = 'fas fa-book citation-icon';
    icon.setAttribute('aria-hidden', 'true');
    link.href = source.url;
    label.textContent = source.organization;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.append(icon, label);
    item.append(link);
    sourceList.append(item);
  });

  console.log('Loading disease:', disease.name);

  // Fill in title and basic info
  document.getElementById('disease-title').textContent = disease.name;
  document.getElementById('disease-description').textContent = disease.description;
  document.getElementById('disease-aoo').textContent = disease.ageOfOnset;
  const globalCases = document.getElementById('global-cases');
  const globalCasesValue = disease.globalCases;
  globalCases.hidden = globalCasesValue === null || globalCasesValue === undefined || globalCasesValue === '';
  if (!globalCases.hidden) {
    const formattedCases = typeof globalCasesValue === 'number'
      ? globalCasesValue.toLocaleString()
      : globalCasesValue;
    globalCases.querySelector('span').textContent = `${formattedCases} global cases`;
  }
  document.querySelector('.container').classList.add(`category-${disease.category.toLowerCase()}`);
  renderOverview('causes-overview', disease.sectionOverviews?.causes);
  renderOverview('symptoms-overview', disease.sectionOverviews?.symptoms);
  renderOverview('treatments-overview', disease.sectionOverviews?.treatments);
  renderOverview('diagnosis-overview', disease.sectionOverviews?.diagnosis);

  // Causes
  const causesList = document.getElementById('causes-list');
  renderEntries(causesList, disease.causes);

  // Symptoms
  const symptomsList = document.getElementById('symptoms-list');
  renderEntries(symptomsList, disease.symptoms);

  // Treatments
  const treatmentsContent = document.getElementById('treatments-content');
  renderTreatments(treatmentsContent, disease.treatments);

  // Diagnosis
  const diagnosisList = document.getElementById('diagnosis-list');
  renderEntries(diagnosisList, disease.diagnosis);

  // Update page title
  document.title = disease.name + ' | Neuromuscular Disease Explorer';
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  waitForData(loadDiseaseInfo);

  document.querySelector('.compare-button').addEventListener('click', function() {
    const diseaseId = getDiseaseIdFromURL();
    window.location.href = `../Compare holder/compare.html?diseaseId=${encodeURIComponent(diseaseId)}`;
  });
});
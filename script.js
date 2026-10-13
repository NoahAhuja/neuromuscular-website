// Generate disease boxes from data.js
function generateDiseaseBoxes() {
  const container = document.getElementById('diseaseContainer');
  
  diseases.forEach(disease => {
    const boxHTML = `
      <div class="wrapper-disease-box1 ${disease.category.toLowerCase()}">
        <div class="disease-box1">
          <div class="title-facts">
            <h2>${disease.name}</h2>
            <div class="quick-facts">
              <p><i class="fas fa-heartbeat"></i> ${disease.facts[0]}</p>
              <p><i class="fas fa-dna"></i> ${disease.facts[1]}</p>
            </div>
          </div>
          <p>${disease.description}</p>
        </div>

        <div class="button-wrapper">
          <a href="Info HTML + CSS holder/info.html?diseaseId=${encodeURIComponent(disease.id)}">
            <button type="button" class="info-btn" data-disease-id="${disease.id}">
              <i class="fas fa-circle-info" style="color: black;"></i> <strong>More Information</strong>
            </button>
          </a>

          <div class="line"></div>

          <a href="#">
            <button type="button" class="compare-btn" data-disease-id="${disease.id}">
              <i class="fas fa-code-compare" style="color: black;"></i> <strong>Compare Disease</strong>
            </button>
          </a>
        </div>
      </div>
    `;
    
    container.innerHTML += boxHTML;
  });
}

// Generate boxes
generateDiseaseBoxes();

document.getElementById('diseaseContainer').addEventListener('click', event => {
  const compareButton = event.target.closest('.compare-btn');
  if (!compareButton) return;

  window.location.href = `Compare holder/compare.html?diseaseId=${encodeURIComponent(compareButton.dataset.diseaseId)}`;
});

const searchInput = document.getElementById('searchInput');
const clearSearchButton = document.querySelector('.clear-icon');
const diseaseContainer = document.getElementById('diseaseContainer');
const noResultsMessage = document.createElement('p');
noResultsMessage.className = 'no-results';
noResultsMessage.textContent = 'No diseases match your search.';
noResultsMessage.hidden = true;
diseaseContainer.insertAdjacentElement('afterend', noResultsMessage);

function filterDiseases() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  const diseaseCards = diseaseContainer.querySelectorAll('.wrapper-disease-box1');
  let visibleCount = 0;

  diseaseCards.forEach((card, index) => {
    const disease = diseases[index];
    const searchableText = JSON.stringify(disease).toLocaleLowerCase();
    const matches = searchableText.includes(query);
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  clearSearchButton.hidden = query.length === 0;
  noResultsMessage.hidden = visibleCount > 0;
}

searchInput.addEventListener('input', filterDiseases);
clearSearchButton.addEventListener('click', () => {
  searchInput.value = '';
  filterDiseases();
  searchInput.focus();
});


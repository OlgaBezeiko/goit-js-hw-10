// index.js

import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfoContainer = document.querySelector('.cat-info');

function populateBreedSelect(breeds) {
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    breedSelect.appendChild(option);
  });
}

function displayCatInfo(cat) {
  const catImg = document.createElement('img');
  catImg.src = cat[0].url;
  catImg.alt = 'Cat Image';
  catImg.width = 500;

  
  const catName = document.createElement('h2');
  catName.textContent = cat[0].breeds[0].name;

  const catDescription = document.createElement('p');
  catDescription.textContent = `Description: ${cat[0].breeds[0].description}`;

  const catTemperament = document.createElement('p');
  catTemperament.textContent = `Temperament: ${cat[0].breeds[0].temperament}`;

  catInfoContainer.innerHTML = '';
  catInfoContainer.appendChild(catImg);
  catInfoContainer.appendChild(catName);
  catInfoContainer.appendChild(catDescription);
  catInfoContainer.appendChild(catTemperament);
}

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

function showError() {
  error.style.display = 'block';
}

function hideError() {
  error.style.display = 'none';
}

fetchBreeds()
  .then(breeds => {
    populateBreedSelect(breeds);
  })
  .catch(() => {
    showError();
  })
  .finally(() => {
    hideLoader();
  });

breedSelect.addEventListener('change', () => {
  const selectedBreedId = breedSelect.value;

  hideError();
  showLoader();

  fetchCatByBreed(selectedBreedId)
    .then(cats => {
      displayCatInfo(cats);
    })
    .catch(() => {
      showError();
    })
    .finally(() => {
      hideLoader();
    });
});
const slimSelect = new SlimSelect({
    select: breedSelect
  });
import { fetchCatByBreed } from './cat-api.js';

// Отримання значення вибраної опції зі селекту
const selectElement = document.querySelector('.breed-select');
selectElement.addEventListener('change', (event) => {
  const selectedBreedId = event.target.value;

  fetchCatByBreed(selectedBreedId)
    .then(cat => {
      // Використати дані про кота тут
      console.log(cat);
      displayCatInfo(cat);
    })
    .catch(error => {
      // Обробка помилки
      console.error(error);
    });
});

function displayCatInfo(cat) {
  const catInfoContainer = document.querySelector('.cat-info');
  catInfoContainer.innerHTML = `
    <img src="${cat[0].url}" alt="Cat Image">
    <h2>${cat[0].breeds[0].name}</h2>
    <p>Description: ${cat[0].breeds[0].description}</p>
    <p>Temperament: ${cat[0].breeds[0].temperament}</p>
  `;
}

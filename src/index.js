import { fetchBreeds } from './cat-api.js';

fetchBreeds()
  .then(breeds => {
    // Використовуйте отриманий масив порід тут
    console.log(breeds);
  })
  .catch(error => {
    // Обробка помилки
    console.error(error);
  });

  
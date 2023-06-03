// cat-api.js

const API_KEY = 'live_K50XRdXZxBUocJl4iOWUECHUubPo46LLcOKHPW8OdNA71QPbUeJ0Xj4kEvl5qHDK';

export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

  return fetch(url, {
    headers: {
      'x-api-key': API_KEY
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch cat by breed');
      }
      return response.json();
    });
}

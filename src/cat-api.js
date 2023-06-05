
const apiKey = 'live_K50XRdXZxBUocJl4iOWUECHUubPo46LLcOKHPW8OdNA71QPbUeJ0Xj4kEvl5qHDK'; 

export function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds';

  return fetch(url, {
    headers: {
      'x-api-key': apiKey
    }
  })
    .then(response => response.json())
    .then(data => data.map(breed => ({ id: breed.id, name: breed.name })))
    .catch(error => {
      console.error('Error fetching breeds:', error);
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

  return fetch(url, {
    headers: {
      'x-api-key': apiKey
    }
  })
    .then(response => response.json())
    .then(data => data[0])
    .catch(error => {
      console.error('Error fetching cat by breed:', error);
      throw error;
    });
}

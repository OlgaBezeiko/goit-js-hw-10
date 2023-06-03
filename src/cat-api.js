// cat-api.js
export function fetchCatByBreed(breedId) {
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
    const headers = {
      "x-api-key": apiKey,
    };
  
    return fetch(url, { headers })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => {
        console.error("Error fetching cat by breed:", error);
        throw error;
      });
  }
  
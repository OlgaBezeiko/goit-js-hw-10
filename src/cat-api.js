
//const apiKey = 'live_K50XRdXZxBUocJl4iOWUECHUubPo46LLcOKHPW8OdNA71QPbUeJ0Xj4kEvl5qHDK'; 

//export function fetchBreeds() {
  //const url = 'https://api.thecatapi.com/v1/breeds';

  //return fetch(url, {
   //headers: {
      //'x-api-key': apiKey
    //}
  //})
    //.then(response => response.json())
    //.then(data => data.map(breed => ({ id: breed.id, name: breed.name })))
    //.catch(error => {
      //console.error('Error fetching breeds:', error);
      //throw error;
    //});
//}

//export function fetchCatByBreed(breedId) {
  //const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

  //return fetch(url, {
    //headers: {
      //'x-api-key': apiKey
   // }
  //})
    //.then(response => response.json())
    //.then(data => data[0])
    //.catch(error => {
      //console.error('Error fetching cat by breed:', error);
      //throw error;
    //});
//}




const API_URL = "https://api.thecatapi.com/v1/";
const API_KEY = "live_K50XRdXZxBUocJl4iOWUECHUubPo46LLcOKHPW8OdNA71QPbUeJ0Xj4kEvl5qHDK";
const API_HEADERS = new Headers({
    'Content-Type': 'application/json',
    'x-api-key' : API_KEY,
});
export function fetchBreeds(){
          return fetch(`${API_URL}breeds`,{method:"GET", headers:API_HEADERS})
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
           return response.json()})
        .then(res => {
           return res.map(obj => ({
                id: obj.id,
                name: obj.name
            }))
        })
        .catch(e =>console.log(e)); 
    }

    export function fetchCatByBreed(breedId){
        console.log(breedId);
               return fetch(`${API_URL}images/search?breed_ids=${breedId}`, {method:"GET",headers:API_HEADERS}).then(req => 
            {if(!req.ok){
                throw new Error(req.error);
            }
            return req.json();
        })
    }
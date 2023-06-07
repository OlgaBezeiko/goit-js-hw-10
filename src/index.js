//import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
//import SlimSelect from 'slim-select';
//import Notiflix from 'notiflix';
//import '/node_modules/slim-select/dist/slimselect.css';

//const selectRef = document.querySelector('#breed-select');
//const loader = document.querySelector('.loader');
//const error = document.querySelector('.error');
//const catInfoContainer = document.querySelector('.cat-info');

//let breedSelect;

//function populateBreedsSelect(breeds) {
  //const markup = breeds.map(breed => {
    //const option = document.createElement('option');
    //option.value = breed.id;
    //option.textContent = breed.name;
   // return option;
  //});

  //selectRef.append(...markup);
  //breedSelect = new SlimSelect({
    //select: '#breed-select',
    //afterChange: (selectedBreedId) => {
      //hideError();
      //showLoader();

      //fetchCatByBreed(selectedBreedId)
        //.then(cats => {
        //  displayCatInfo(cats);
       // })
      // .catch(() => {
        //  showError();
        //  Notiflix.Notify.failure('Oops! Something went wrong. Please try again.');
       // })
       // .finally(() => {
        //  hideLoader();
        //});
   // }
 // });
//}

//function displayCatInfo(cat) {
  //if (cat && cat.length > 0) {
   // const catImg = document.createElement('img');
  //  catImg.src = cat[0].url;
   // catImg.alt = 'Cat Image';
   // catImg.width = 500;

    //const catName = document.createElement('h2');
    //catName.textContent = cat[0].breeds[0].name;

    //const catDescription = document.createElement('p');
   // catDescription.textContent = `Description: ${cat[0].breeds[0].description}`;

    //const catTemperament = document.createElement('p');
    //catTemperament.textContent = `Temperament: ${cat[0].breeds[0].temperament}`;

   // catInfoContainer.innerHTML = '';
   // catInfoContainer.appendChild(catImg);
    //catInfoContainer.appendChild(catName);
   // catInfoContainer.appendChild(catDescription);
   // catInfoContainer.appendChild(catTemperament);
  //} else {
 //   catInfoContainer.innerHTML = 'No cat information available';
  //}
//}

//function showLoader() {
 // loader.style.display = 'block';
//}

//function hideLoader() {
 // loader.style.display = 'none';
//}

//function showError() {
  //error.style.display = 'block';
//}

//function hideError() {
 // error.style.display = 'none';
//}

//fetchBreeds()
  //.then(breeds => {
    //populateBreedsSelect(breeds);
  //})
  //.catch((error) => {
    //  console.log(error.message)
     // showError();
     // Notiflix.Notify.failure('Oops! Something went wrong. Please try again.');
    //})
  //.finally(() => {
   // hideLoader();
 // });






import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";
import SlimSelect from 'slim-select';

fetchBreeds().then(createBreedsList);

const selectEl = document.querySelector(".breed-select");
selectEl.addEventListener("change", selectElHandler);
const loaderEl = document.querySelector(".loader");
const catInfoDiv = document.querySelector(".cat-info");
function createBreedsList(data){
    const result = data.map(({id, name}) => {        
            // const option = document.createElement("option");
            // option.textContent = name;
            // option.value = id;
            // return option;
            return {text: name, value: id};
        });
        // selectEl.append(...result);
        const emptyObj = {text: " ", value: " "};

        result.unshift(emptyObj);

        new SlimSelect({
            select: '.breed-select',
            data: result,
            settings: {
                allowDeselect: true
              }
          })

    }

function selectElHandler(event){
    loaderEl.classList.remove("visually-hidden");
    const breedId = selectEl.value;

    if (breedId === " ") {

        return breedId;
    }
    fetchCatByBreed(breedId).then(data => {
        const catImgURL = data[0].url;
        const catBreedInfo = data[0].breeds[0];
        // console.log(data[0]);
    const catInfoCode = `
    <div class="cat-info-box">
    <img id="photo" class="breed-img" src="${catImgURL}" width="350" loading="lazy" >
    <div class="cat-text-box"> 
    <h1 class="breed-name">${catBreedInfo.name}</h1>
    <p class="breed-description">${catBreedInfo.description}</p>
    <h2>Temperament:</h2>
    <p class="breed-temperament"> ${catBreedInfo.temperament}</p></div>
    </div>
    `;
    catInfoDiv.innerHTML = catInfoCode;
    }).catch(error => {
        console.log(error);
        const e = error;
        Notiflix.Notify.failure(`Error: ${e}`);
    });
    setTimeout(hideLoader, 2500);
}
// window.onload = (event) => {
//     loaderEl.classList.add("visually-hidden");
//   };
// const catEl = document.getElementById("photo");
// console.dir(catEl);
// console.log(catEl.loading);
// catEl.onload = console.log("load");
// setInterval(()=>console.log(catEl.complite), 250) ;
// window.addEventListener("load", event => {
//     var image = document.querySelector('img');
//     var isLoadedSuccessfully = image.complete && image.naturalWidth !== 0;
//     alert(isLoadedSuccessfully);
// });
function hideLoader(){
    loaderEl.classList.add("visually-hidden");
}
!function(){var e="live_K50XRdXZxBUocJl4iOWUECHUubPo46LLcOKHPW8OdNA71QPbUeJ0Xj4kEvl5qHDK";var t=document.querySelector(".breed-select"),n=document.querySelector(".loader"),c=document.querySelector(".error"),o=document.querySelector(".cat-info");function a(){n.style.display="none"}function r(){c.style.display="block"}fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":e}}).then((function(e){if(!e.ok)throw new Error("Failed to fetch breeds");return e.json()})).then((function(e){!function(e){e.forEach((function(e){var n=document.createElement("option");n.value=e.id,n.textContent=e.name,t.appendChild(n)}))}(e)})).catch((function(){r()})).finally((function(){a()})),t.addEventListener("change",(function(){var i,d,l=t.value;c.style.display="none",n.style.display="block",(i=l,d="https://api.thecatapi.com/v1/images/search?breed_ids=".concat(i),fetch(d,{headers:{"x-api-key":e}}).then((function(e){if(!e.ok)throw new Error("Failed to fetch cat");return e.json()}))).then((function(e){!function(e){var t=document.createElement("img");t.src=e[0].url,t.alt="Cat Image",t.width=500;var n=document.createElement("h2");n.textContent=e[0].breeds[0].name;var c=document.createElement("p");c.textContent="Description: ".concat(e[0].breeds[0].description);var a=document.createElement("p");a.textContent="Temperament: ".concat(e[0].breeds[0].temperament),o.innerHTML="",o.appendChild(t),o.appendChild(n),o.appendChild(c),o.appendChild(a)}(e)})).catch((function(){r()})).finally((function(){a()}))}));new SlimSelect({select:t})}();
//# sourceMappingURL=index.1dbbc33c.js.map

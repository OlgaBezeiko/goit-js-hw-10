const e=document.querySelector(".breed-select"),t=document.querySelector(".loader"),n=document.querySelector(".error"),c=document.querySelector(".cat-info");function o(){t.style.display="none"}function r(){n.style.display="block"}fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_K50XRdXZxBUocJl4iOWUECHUubPo46LLcOKHPW8OdNA71QPbUeJ0Xj4kEvl5qHDK"}}).then((e=>{if(!e.ok)throw new Error("Failed to fetch breeds");return e.json()})).then((t=>{!function(t){t.forEach((t=>{const n=document.createElement("option");n.value=t.id,n.textContent=t.name,e.appendChild(n)}))}(t)})).catch((()=>{r()})).finally((()=>{o()})),e.addEventListener("change",(()=>{const a=e.value;var d;n.style.display="none",t.style.display="block",(d=a,fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${d}`,{headers:{"x-api-key":"live_K50XRdXZxBUocJl4iOWUECHUubPo46LLcOKHPW8OdNA71QPbUeJ0Xj4kEvl5qHDK"}}).then((e=>{if(!e.ok)throw new Error("Failed to fetch cat");return e.json()}))).then((e=>{!function(e){const t=document.createElement("img");t.src=e[0].url,t.alt="Cat Image",t.width=500;const n=document.createElement("h2");n.textContent=e[0].breeds[0].name;const o=document.createElement("p");o.textContent=`Description: ${e[0].breeds[0].description}`;const r=document.createElement("p");r.textContent=`Temperament: ${e[0].breeds[0].temperament}`,c.innerHTML="",c.appendChild(t),c.appendChild(n),c.appendChild(o),c.appendChild(r)}(e)})).catch((()=>{r()})).finally((()=>{o()}))}));new SlimSelect({select:e});
//# sourceMappingURL=index.acd3813d.js.map

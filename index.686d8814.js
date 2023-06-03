fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_K50XRdXZxBUocJl4iOWUECHUubPo46LLcOKHPW8OdNA71QPbUeJ0Xj4kEvl5qHDK"}}).then((function(e){if(!e.ok)throw new Error("Failed to fetch breeds");return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.error(e)}));
//# sourceMappingURL=index.686d8814.js.map

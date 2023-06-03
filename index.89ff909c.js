fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_K50XRdXZxBUocJl4iOWUECHUubPo46LLcOKHPW8OdNA71QPbUeJ0Xj4kEvl5qHDK"}}).then((e=>{if(!e.ok)throw new Error("Failed to fetch breeds");return e.json()})).then((e=>{console.log(e)})).catch((e=>{console.error(e)}));
//# sourceMappingURL=index.89ff909c.js.map

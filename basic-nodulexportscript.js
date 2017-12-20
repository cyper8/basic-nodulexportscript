window.module = {
  set exports(v){
    if (v){
      if ((typeof v === "function") || (typeof v === "object")) {
        if (v.name && (v.name !== "")) {
          return (window[v.name] = v);
        }
        // this is probably useless since at this point currentScript is not where v declared
        if (document.currentScript && document.currentScript.src) {
          var name = document.currentScript.src
            .match(/[^\/]+$/)[0]
            .replace(/\.[^\.]*$/,"")
          return (window[name] = v)
        }
      }
    }
    console.log("WARNING: Unable to globaly register symbol: "+v);
    return v;
  }
};

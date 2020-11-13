// Witchcraft from global var (window.autoGet)
autoGet.innerHTML = "I grabbed this Element by witchcraft!"

let autoGetNormal = document.getElementById('autoGet');

autoGetNormal.innerHTML = "Now I got it more traditionally.."

fetch("http://localhost:4000/graphql", {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    method: 'POST',
    body: JSON.stringify({query: "{ hello }"})
}).then(res => res.json())
  .then(data => {
      console.log(data);
      graphP.innerHTML=data.data.hello
  })

     
  function myaxiosFunction() {

      axios.get('https://pokeapi.co/api/v2/pokemon/' )
      .then(response => (info = response))
   
   
return items.map(({ name, url }) => ({ name: name, url: url }));

 };


 function loadfetchPoke() {
   fetch('https://pokeapi.co/api/v2/pokemon/')
   .then(function (response) {
     if (response.ok)
       return response.json();
     throw new Error('Response is not OK');
   })
   .then(function (data) {
     console.log(data);
     data.results.forEach(function (pokemon) {
       recupInfo(pokemon.url);
     });
   })
   .catch(function (error) {
     console.log(error);
   });
 }

 function loadfetchCity() {
   let displayResources = document.querySelector("#display-resources");
   displayResources.textContent =
   "Loading data from JSON source...";
   fetch("https://geo.api.gouv.fr/departements/13/communes?fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre")

     .then(function(response) {
       if (response.ok)
       return response.json();
     throw new Error('Response is not OK');
   })
     .then(function(result) {
       let output =
         "<table class='table table-striped'><thead><tr><th scope='col'>Name</th><th scope='col'>Provider</th><th>URL</th></thead><tbody>";
       for (let i in result) {
         output +=
           "<tr><td>" +
           result[i].code +
           "</td><td>" +
           result[i].nom +
           "</td><td>" +
           result[i].population +
           "</td></tr>";
       }
       output += "</tbody></table>";
       displayResources.innerHTML = output;
     })
     .catch(function (error) {
       console.log(error);
     });
 };

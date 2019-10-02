

function loadfetchDataRefresh() {
  for (i = 0; i < 5; i++) {
    clearInterval(i);
    console.log(i);
  }
 let varrefresh = document.getElementById("refresh-dropdown").value;
  if (varrefresh >= 1) {
    let timer = setInterval(function () { loadfetchData() }, varrefresh);
      } 
}

function loadfetchData() {

  let varservice = document.getElementById("service-dropdown").value;
  let varpage = document.getElementById("page-dropdown").value;
  let displayResources = document.querySelector("#display-resources");

  fetch('http://marc.in2p3.fr:8080/api/v0/msgs/' + varservice + '?n=' + varpage)
    .then(function (response) {
      if (response.ok)
        return response.json();
      throw new Error('Response is not OK');
    })
    .then(function (result) {

      console.log(result);
      let output =

        "<table class='table table-striped table-sm table-bordered'><thead><tr><th class='col-md-2'>date</th><th scope='col' class='col-md-1'>level</th><th scope='col' class='col-md-2'>service</th><th scope='col' class='col-md-7'>message</th></thead><tbody>";
      for (let i in result) {

        if (result[i].levelname === 'ERROR') { couleur = 'text-danger' } else { couleur = 'text-dark' };
        var varhost = result[0].host;
        output +=
          "<tr class=" + couleur + "><td >" +
          result[i].asctime +
          "</td><td >" +
          result[i].levelname +
          "</td><td >" +
          result[i].customname +
          "</td><td >" +
          result[i].message + result[i].spacer + result[i].varmessage +
          "</td></tr>";
         }
      output += "</tbody></table>";
      displayResources.innerHTML = output;

      var txt = document.getElementById('txt');
      //txt = replace.txt;
     console.log(varhost);
      txt.innerHTML = varhost;
    })
    .catch(function (error) {
      console.log(error);
    });
};


//var txt = document.getElementById('txt');
//var inputs = document.getElementsByName('value');
//txt.innerHTML += inputs[0].value + "<br />";




function loadfetchService() {
  loadfetchDataRefresh();
  let dropdown = document.getElementById('service-dropdown');
  dropdown.length = 0;

  let defaultOption = document.createElement('option');
  defaultOption.text = 'Choose Service';

  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;

  const url = 'http://marc.in2p3.fr:8080/api/v0/services';
  fetch(url)
    .then(
      function (response) {
        if (response.status !== 200) {
          console.warn('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        response.json().then(function (data) {
          let option;
          for (let i = 0; i < data.length; i++) {
            option = document.createElement('option');
            option.text = data[i];
            option.value = data[i];
            dropdown.add(option);
          }
        });
      }
    )
    .catch(function (err) {
      console.error('Fetch Error -', err);
    });
}
document.querySelector("#retrieve-resources").onclick = () => {
    let displayResources = document.querySelector("#display-resources");
    displayResources.textContent =
      "Loading data from JSON source...";
    fetch("resources.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        let output =
          "<table class='table table-striped'><thead><tr><th scope='col'>Name</th><th scope='col'>Provider</th><th>URL</th></thead><tbody>";
        for (let i in result) {
          output +=
            "<tr><td>" +
            result[i].name +
            "</td><td>" +
            result[i].provider +
            "</td><td>" +
            result[i].url +
            "</td></tr>";
        }
        output += "</tbody></table>";
        displayResources.innerHTML = output;
      });
  };

 
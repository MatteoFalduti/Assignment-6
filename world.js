document.addEventListener("DOMContentLoaded", function () {
    const countriesTable = document.getElementById("members");
    let count = 1;
    fetch("https://restcountries.com/v3.1/independent?status=true")
      .then(response => response.json())
      .then(data => {
        const countries = data;
        const table = document.createElement("table");

        const headerRow = document.createElement("tr");
        const headers = ["#", "Name", "Flag", "Coat of Arms", "Native Name", "Capital", "(Sub)Region"];
        headers.forEach(headerText => {
        const headerCell = document.createElement("th");
        headerCell.textContent = headerText;
        headerRow.appendChild(headerCell);
      });

      table.appendChild(headerRow);
  
        countries.forEach(country => {
          const row = document.createElement("tr");
          const cellValues = [
            count,
            country.name.common,
             `<img src="${country.flags.png}" alt="${country.name.common} Flag" width="30">`,
             `<img src="${country.coatOfArms.svg}" alt="${country.name.common} Coat of Arms" width="30">`,
             country.nativeName,
             country.capital[0],
             country.region
          ];
          cellValues.forEach(cellValue => {
            const cell = document.createElement("td");
            cell.innerHTML = cellValue;
            row.appendChild(cell);
          });
           table.appendChild(row);
           count++;
        });
        countriesTable.appendChild(table);
      })
    });
    
    
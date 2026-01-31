let prices = document.querySelectorAll(".prices");
let total = 0;

// Add all prices
for (let i = 0; i < prices.length; i++) {
    total += Number(prices[i].textContent);
}

// Create new row
let table = document.getElementById("groceryTable");
let newRow = document.createElement("tr");
let newCell = document.createElement("td");

// Set colspan and total value
newCell.colSpan = 2;
newCell.textContent = "Total Price: " + total;

newRow.appendChild(newCell);
table.appendChild(newRow);

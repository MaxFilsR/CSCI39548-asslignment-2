const colorDropdown = document.getElementById("colorDropdown");
let selectedCell = null;

function addRow() {
  const table = document.getElementById("myTable");
  if (table.rows.length === 0) {
    const row = document.createElement("tr");
    for (var i = 0; i < 3; i++) {
      const cell = document.createElement("td");
      cell.className = "tableCell";
      cell.addEventListener("click", () => {
        selectedCell = cell
        applySelectedColor();
      })
      row.append(cell);
    }

    table.append(row);
  } else {
    const newRow = document.createElement("tr");
    console.dir(table.rows[0].cells.length);
    for (var i = 0; i < table.rows[0].cells.length; i++) {
      const newCel = document.createElement("td");
      newCel.className = "tableCell";
      newCel.addEventListener("click", () => {
        selectedCell = newCel; 
        applySelectedColor();
      })
      newRow.append(newCel);
    }
    table.append(newRow);
  }
}

function addCol() {
  const table = document.getElementById("myTable");
  if (table.rows.length === 0) {
    for (var i = 0; i < 3; i++) {
      const newRow = document.createElement("tr");
      const newCel = document.createElement("td");
      newCel.className = "tableCell";
      newCel.addEventListener("click", () => {
        selectedCell = newCel; 
        applySelectedColor()
      })
      newRow.append(newCel);
      table.append(newRow);
    }
  } else {
    for (var i = 0; i < table.rows.length; i++) {
      const newCel = document.createElement("td");
      newCel.className = "tableCell";
      newCel.addEventListener("click", () => {
        selectedCell = newCel; 
        applySelectedColor()
      })
      table.rows[i].append(newCel);
    }
  }

  console.log(table.rows);
}

function removeRow() {
  const table = document.getElementById("myTable");
  if (table.rows.length === 0) {
    alert("No rows to remove");
  } else {
    const lastRow = table.lastChild;
    selectedCell = null; 
    table.removeChild(lastRow);
  }
}


function removeCol() {
  const table = document.getElementById("myTable");
  if (table.rows.length == 0) {
    alert("No rows to remove column from")
    return; 
  }

  if (table.rows[0].cells.length  === 0) {
    alert("No columns left to remove")
    return;
  }

  for(var i = 0; i < table.rows.length; i++) {
    selectedCell = null; 
    table.rows[i].deleteCell(-1)
  }
}

function applySelectedColor() {
  if(selectedCell && colorDropdown.value) {
    selectedCell.style.backgroundColor = colorDropdown.value;
  }
  else if (selectedCell && !colorDropdown.value) {
    alert("Please select a color from the dropdown");
  }
}

colorDropdown.addEventListener('change', () => {
  if (selectedCell && colorDropdown.value) {
    selectedCell.style.backgroundColor = colorDropdown.value;
  }
})

function colorUncolored() {
  const table = document.getElementById("myTable");
  const color = colorDropdown.value;
  if (!color) return;

  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      const cell = table.rows[i].cells[j];
      if (!cell.style.backgroundColor || cell.style.backgroundColor === "" || cell.style.backgroundColor === "white") {
        cell.style.backgroundColor = color;
      }
    }
  }
}
function colorAll(){
  const table = document.getElementById("myTable");
  const color = colorDropdown.value;
  if (!color) return;

  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      const cell = table.rows[i].cells[j];
      cell.style.backgroundColor = color;
    }
  }
}
function clearAll() {
  const table = document.getElementById("myTable");

  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      const cell = table.rows[i].cells[j];
      cell.style.backgroundColor = "";
    }
  }
}
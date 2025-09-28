const colorPicker = document.getElementById('colorPicker')
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
        colorPicker.click();
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
        colorPicker.click();
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
        colorPicker.click();
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
        colorPicker.click();
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

function addColortoSingleCell() {
  if (selectedCell) {
    selectedCell.style.backgroundColor = event.target.value;
  }
}


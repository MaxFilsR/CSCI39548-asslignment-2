function addRow() {
  const table = document.getElementById("myTable");
  if (table.rows.length === 0) {
    const row = document.createElement("tr");
    for (var i = 0; i < 3; i++) {
      const cell = document.createElement("td");
      cell.className = "tableCell";
      row.append(cell);
    }

    table.append(row);
  } else {
    const newRow = document.createElement("tr");
    console.dir(table.rows[0].cells.length);
    for (var i = 0; i < table.rows[0].cells.length; i++) {
      const newCel = document.createElement("td");
      newCel.className = "tableCell";
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

      newRow.append(newCel);
      table.append(newRow);
    }
  } else {
    for (var i = 0; i < table.rows.length; i++) {
      const newCel = document.createElement("td");
      newCel.className = "tableCell";
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
    table.removeChild(lastRow);
  }
}

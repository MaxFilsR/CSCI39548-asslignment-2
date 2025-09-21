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

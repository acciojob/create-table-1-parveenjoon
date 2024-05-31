function insert_Row() {
    // Create a new row element
    var newRow = document.createElement('tr');
    
    // Create new cell elements with the desired content
    var cell1 = document.createElement('td');
    var cell2 = document.createElement('td');
    cell1.textContent = 'New Cell1';
    cell2.textContent = 'New Cell2';
    
    // Append the cell elements to the new row
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    
    // Get a reference to the table
    var table = document.getElementById('sampleTable');
    
    // Insert the new row at the top of the table
    if (table.rows.length > 0) {
        table.insertBefore(newRow, table.rows[0]);
    } else {
        // If the table is empty, simply append the new row
        table.appendChild(newRow);
    }
}

document.addEventListener('DOMContentLoaded', function() {
  const educationTableBody = document.getElementById('educationTableBody');

  fetch('./degrees.json') 
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Process the returned JSON data and populate the table
      data.degrees.forEach(degree => {
        const row = document.createElement('tr');

        // Create a link for the university name
        const universityLink = document.createElement('a');
        universityLink.href = degree.url; 
        universityLink.target = '_blank'; 
        universityLink.textContent = degree.school;

        // Create cells and append the link to the "School" cell
        const schoolCell = document.createElement('td');
        schoolCell.appendChild(universityLink);
        const programCell = document.createElement('td');
        programCell.textContent = degree.program;
        const typeCell = document.createElement('td');
        typeCell.textContent = degree.type;
        const yearCell = document.createElement('td');
        yearCell.textContent = degree.yearConferred;

        // Append cells to the row
        row.appendChild(schoolCell);
        row.appendChild(programCell);
        row.appendChild(typeCell);
        row.appendChild(yearCell);

        // Append row to the table body
        educationTableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
});

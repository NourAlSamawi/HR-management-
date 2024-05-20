function renderEmployeeCard(employee) {
    const employeeContainer = document.getElementById('employees');
  
    const card = document.createElement('div');
    card.classList.add('employee-card');
  
    const image = document.createElement('img');
    // Set the image source directly from the employee.imageURL property
    image.src = employee.imageURL;
    image.alt = `${employee.fullName}`; // Set alt text for accessibility
  
    const info = document.createElement('div');
    info.classList.add('employee-info');
  
    // ... rest of the code remains the same ...
  
    card.appendChild(image);
    card.appendChild(info);
  
    employeeContainer.appendChild(card);
  }
  
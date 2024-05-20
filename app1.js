let employeeData = [];
function generateUniqueEmployeeId() {

  return Math.floor(Math.random() * 9000) + 1000;
}

function renderEmployeeCard(employee) {
  const employeeContainer = document.getElementById('employees');

  const card = document.createElement('div');
  card.classList.add('employee-card');

  const image = document.createElement('img');
  image.src = employee.imageURL;
  image.alt = `${employee.fullName}`;

  const info = document.createElement('div');
  info.classList.add('employee-info');

  const name = document.createElement('h3');
  name.textContent = employee.fullName;

  const details = document.createElement('p');
  details.innerHTML = `Department: ${employee.department} - Level: ${employee.level}`;

  info.appendChild(name);
  info.appendChild(details);

  card.appendChild(image);
  card.appendChild(info);

  employeeContainer.appendChild(card);
}

const form = document.getElementById('employee-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const newEmployee = {
    id: generateUniqueEmployeeId(),
    fullName: form.fullName.value,
    department: form.department.value,
    level: form.level.value,
    imageURL: form.imageURL.value,
  };

  employeeData.push(newEmployee); 
  renderEmployeeCard(newEmployee); 

  form.reset();
});

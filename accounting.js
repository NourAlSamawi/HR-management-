const employeeData = JSON.parse(localStorage.getItem('employees')) || [];

function calculateDepartmentInfo(data) {
  const departmentInfo = {};
  let totalEmployees = 0;
  let totalSalary = 0;

  data.forEach(employee => {
    const department = employee.department;
    if (!departmentInfo[department]) {
      departmentInfo[department] = {
        count: 0,
        totalSalary: 0,
      };
    }
    departmentInfo[department].count++;
    departmentInfo[department].totalSalary += employee.salary; 
    totalEmployees++; 
    totalSalary += employee.salary; 
  });

  for (const department in departmentInfo) {
    if (departmentInfo[department].count > 0) {
      departmentInfo[department].averageSalary = departmentInfo[department].totalSalary / departmentInfo[department].count;
    } else {
      departmentInfo[department].averageSalary = 0;
    }
  }

  const overallAverageSalary = totalSalary / totalEmployees; 

  return { departmentInfo, totalEmployees, overallAverageSalary, totalSalary };
}

function renderDepartmentInfoTable(data) {
  const table = document.getElementById('department-info');

  const headerRow = document.createElement('tr');
  headerRow.innerHTML = `<th>Department Name</th><th>Number of Employees</th><th>Average Salary</th><th>Total Salary</th>`;
  table.appendChild(headerRow);

  for (const department in data.departmentInfo) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${department}</td>
      <td>${data.departmentInfo[department].count}</td>
      <td>${data.departmentInfo[department].averageSalary.toFixed(2)}</td>  <td>${data.departmentInfo[department].totalSalary.toFixed(2)}</td>   `;
    table.appendChild(row);
  }

  const footerRow = document.createElement('tr');
  footerRow.classList.add('table-footer'); 
  footerRow.innerHTML = `
    <td>Total</td>
    <td>${data.totalEmployees}</td>
    <td>${data.totalSalary.toFixed(2)}</td>
    <td>${data.overallAverageSalary.toFixed(2)}</td>
  `;
  table.appendChild(footerRow);
}

const departmentData = calculateDepartmentInfo(employeeData);
renderDepartmentInfoTable(departmentData);

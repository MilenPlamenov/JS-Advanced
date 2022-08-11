function solve(employees, criteria) {
    employees = JSON.parse(employees);
    [crit, pattern] = criteria.split('-')
    if (criteria === 'all') {
        employees.forEach(employee => {
            console.log(`${Number(employee.id) - 1}. ${employee.first_name} ${employee.last_name} - ${employee.email}`)
        });
    } else {
        employees.forEach(employee => {
            if (employee[crit] === pattern) {
                console.log(`${Number(employee.id) - 1}. ${employee.first_name} ${employee.last_name} - ${employee.email}`)
            }
        })
    }
}



solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female')
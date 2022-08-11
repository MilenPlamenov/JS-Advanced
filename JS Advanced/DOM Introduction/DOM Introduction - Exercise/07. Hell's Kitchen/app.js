function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      //   ["PizzaHut - Peter 500, George 300, Mark 800","TheLake - Bob 1300, Joe 780, Jane 660"]
      let input = document.getElementsByTagName('textarea')[0].value;
      input = JSON.parse(input);
      let result = {};
      input.forEach(element => {
         let [restaurant, workers] = element.split(' - ');
         if (!result[restaurant]) {
            result[restaurant] = {};
         }
         workers = workers.split(', ');
         workers.forEach(element => {
            let [name, salary] = element.split(' ');
            salary = Number(salary);
            result[restaurant][name] = salary;
         })

      });
      let highestAverageSalary = 0;
      let maxSalary = 0;
      let bestRestaurant = '';

      Object.entries(result).forEach(([key, element]) => {
         salaries = Object.values(element).sort((a,b)=>b-a);
         const sum = salaries.reduce((partialSum, a) => partialSum + a, 0);
         const averageSum = sum / salaries.length;
         if (averageSum > highestAverageSalary) {
            highestAverageSalary = averageSum;
            maxSalary = salaries.reduce(function(a, b) { return Math. max(a, b); }, -9999999);
            bestRestaurant = key;
         }
      })
      let showBestRest = document.getElementsByTagName('p')[0];
      showBestRest.innerHTML = `Name: ${bestRestaurant} Average Salary: ${highestAverageSalary.toFixed(2)} Best Salary: ${maxSalary.toFixed(2)}`;

      let showWorkers = document.getElementsByTagName('p')[1];
      Object.entries(result).forEach(([k, v]) => {
         if (k === bestRestaurant) {
            Object.entries(v).sort((a,b) => b[1]-a[1]).forEach(([vK, vE]) => {
               showWorkers.innerHTML += `Name: ${vK} With Salary: ${vE} `
            })
         }
      })
      
   }
}

// written by backend guy ..
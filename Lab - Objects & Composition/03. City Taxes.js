function cityTaxes(name, population, treasury) {
    let obj = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes: function collectTaxes() {
            obj.treasury += Math.floor(obj.population * obj.taxRate);
        },

        applyGrowth: function applyGrowth(percentage) {
            obj.population += Math.floor(obj.population * percentage / 100);  
        },

        applyRecession: function applyRecession(percentage) {
            obj.treasury -= Math.floor(obj.treasury * percentage / 100);
        },

    }
    return obj;
}


const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
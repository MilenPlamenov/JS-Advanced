function solve(arr) {
    let result = {};
    for (let ele of arr) {
        let [city, population] = ele.split(' <-> ');
        population = Number(population);
        if (result[city] != undefined) {

            population += result[city];
        }
        result[city] = population;

    }
    for (let key in result) {

        console.log(`${key} : ${result[key]}`);
    }
}

console.log(solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']))
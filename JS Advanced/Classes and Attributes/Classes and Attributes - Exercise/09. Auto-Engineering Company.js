function solve(arr) {
    let res = {};

    arr.forEach(element => {
       [brand, model, amount] = element.split(' | ');
       amount = Number(amount);
       res[brand] = res[brand] || {}
       res[brand][model] = res[brand][model] || 0
       res[brand][model] += Number(amount);
    });

    Object.entries(res).forEach(([carBrand, carModel]) => {
        console.log(carBrand);
        Object.entries(carModel).forEach(([carModel,producedCars]) => {
            console.log(`###${carModel} -> ${producedCars}`);
        })
    })

}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])
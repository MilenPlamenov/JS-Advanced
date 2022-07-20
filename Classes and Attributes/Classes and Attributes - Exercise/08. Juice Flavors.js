function solve(arr) {
    let res = {};
    let bottles = {};
    arr.forEach(element => {
        [nameP, quantityP] = element.split(' => ');
        quantityP = Number(quantityP);
        if (!res[nameP]) {
            res[nameP] = quantityP;
        } else {
            res[nameP] += quantityP;
        }
        
        if (quantityP >= 1000) {
            bottles[nameP] = Math.trunc(res[nameP]/1000);
        }
        
    });
    Object.entries(bottles).forEach(([product, quantity]) => {
        console.log(`${product} => ${quantity}`);
    })
}



solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])
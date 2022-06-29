function solve(arr) {
    result = {};
    for (el of arr) {
        let [town, product, price] = el.split(' | ');
        price = Number(price);
        
        if (!result[product]) {
            result[product] = { town, price: price }
        } else {
            result[product] = result[product].price <= price ? result[product] : result[product] = { town, price: price }
        }
    }

    for (const product in result) {
        
        console.log(`${product} -> ${result[product].price} (${result[product].town})`);
   }
}

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);
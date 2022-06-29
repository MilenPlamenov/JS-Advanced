function solve(arr) {
    result = {};
    firstLetters = [];

    function fillTheObj(arr, result) {
        for (el of arr) {
            let [product, price] = el.split(' : ');
            price = Number(price);
    
            if (!result[product]) {
                result[product] = price;
            }
        }
        return result;
    }
    
    function takeFirstLetters(result, firstLetters){
        return Object.keys(result).forEach(el => {
            if (!firstLetters.includes(el[0])) {
                firstLetters.push(el[0]);
            }
        });
    }

    function prepareTheObjAndArr(firstLetters, result) {
        firstLetters.sort();
        sorted = Object.keys(result)
        .sort()
        .reduce(function (acc, key) { 
            acc[key] = result[key];
            return acc;
        }, {});
        return sorted;
    }

    fillTheObj(arr, result);
    takeFirstLetters(result, firstLetters);
    prepareTheObjAndArr(firstLetters, result);

    firstLetters.forEach(el => {
        console.log(el);
        Object.entries(sorted).forEach(entry => {
            const [key, value] = entry;
            if (key[0] === el) {
                console.log(`  ${key}: ${value}`);
                delete sorted[key];
            };
        });
    });
}


solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);
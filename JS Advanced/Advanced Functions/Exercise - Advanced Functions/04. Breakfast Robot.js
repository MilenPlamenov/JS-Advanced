function solve() {
    const products = {
        apple: {
            protein: 0,
            carbohydrate: 1,
            fat: 0,
            flavour: 2
        },
        lemonade: {
            protein: 0,
            carbohydrate: 10,
            fat: 0,
            flavour: 20
        },
        burger: {
            protein: 0,
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            carbohydrate: 0,
            fat: 1,
            flavour: 1
        },
        tyrkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        }
    };

    const ingreds = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    function restock(microel, quantity) {
        ingreds[microel] += Number(quantity);
        return 'Success'
    }

    function report() {
        return `protein=${ingreds.protein} carbohydrate=${ingreds.carbohydrate} fat=${ingreds.fat} flavour=${ingreds.flavour}`;
    }

    function prepare(product, quantity) {
        Object.entries(products[product]).forEach(([prod, countNeeded]) => {
            if (ingreds[prod] < countNeeded * quantity) {
                return `Error: not enough ${prod} in stock `;
            }
        })

        Object.entries(products[product]).forEach(([prod, countNeeded]) => {
            ingreds[prod] -= countNeeded * quantity;
        })

        return 'Success';
    }

    function control(str) {
        let [command, item, quantity] = str.split(' ');


        switch (command) {
            case 'restock':
                return restock(item, Number(quantity));
            case 'prepare':
                return prepare(item, Number(quantity));
            case 'report':
                return report();
        }
    }

    return control;
}


let manager = solve();
console.log (manager ("restock flavour 50")); // Success
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock


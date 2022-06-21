function calc(fruit, weightGrams, pricePerKilo) {
    let weightKilo = weightGrams / 1000;
    let price = weightKilo * pricePerKilo;
    console.log(`I need \$${price.toFixed(2)} to buy ${weightKilo.toFixed(2)} kilograms ${fruit}.`)
}


calc('apple', 1563, 2.35)
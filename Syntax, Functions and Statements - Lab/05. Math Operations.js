function mathOperations(numOne, numTwo, operation) {
    if (operation === '+') {
        console.log(numOne + numTwo);
    } else if (operation === '-') {
        console.log(numOne - numTwo);
    } else if (operation === '*') {
        console.log(numOne * numTwo);
    } else if (operation === '/') {
        console.log(numOne / numTwo);
    } else if (operation === '%') {
        console.log(numOne % numTwo);
    } else {
        console.log(numOne ** numTwo);
    }
}
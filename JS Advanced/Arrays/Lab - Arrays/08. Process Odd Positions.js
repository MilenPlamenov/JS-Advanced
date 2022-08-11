function processOddPos(arr) {
    return arr.filter((element, index, array) => index % 2 !== 0).reverse().map((v, i) => {
        return v * 2;
    })
}

console.log(processOddPos([10, 15, 20, 25]))
function biggestElInMatrix(matrix) {
    res = [];
    for (row of matrix) {
        res.push(Math.max(...row));
    }
    return Math.max(...res);
}

console.log(biggestElInMatrix([[20, 50, 10],
                               [8, 33, 145]
                              ]))
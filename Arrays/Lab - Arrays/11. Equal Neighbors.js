function equalNeighbours(matrix) {
    let equalCount = 0;
    matrix.forEach(x =>
        x.reduce((x, y) => {
            if (x === y) {
                equalCount++
            }
            return y
        })
    )

    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === matrix[i + 1][j]) {
                equalCount++;
            }
        }
    }
    console.log(equalCount);
}

equalNeighbours([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']])
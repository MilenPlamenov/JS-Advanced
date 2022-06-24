function diagonalSums(matrix) {
    let sumPrimeDiagonal = 0;
    let sumSecondaryDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        sumPrimeDiagonal += matrix[i][i];
        sumSecondaryDiagonal += matrix[i][matrix.length - i - 1];
    }

    return [sumPrimeDiagonal, sumSecondaryDiagonal].join(' ');
}

console.log(diagonalSums([[20, 40],
              [10, 60]
             ]))
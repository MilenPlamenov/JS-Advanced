function squareOfStars(n) {
    let string = '';
    for (let i = 0; i < n; i++) {
        string += '* '.repeat(n);
        string += '\n';
    }
    return string;
}

console.log(squareOfStars(5));
function solve(arr, start, end) {
    if (!Array.isArray(arr)) {
        return NaN;
    }
    if (start < 0) {
        start = 0;
    }
    if (end > arr.length) {
        end = arr.length - 1;
    }
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (isNaN(arr[i])) {
            return NaN;
        }
        sum += arr[i];
    }
    return sum;
}

console.log(solve([10, 'twenty', 30, 40], 0, 2))
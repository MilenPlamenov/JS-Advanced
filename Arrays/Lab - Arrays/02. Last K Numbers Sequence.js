function lastKNumbers(n, k) {
    arr = [1];
    while (arr.length < n) {
        let count = 0;
        let num = 0;
        for (let i = arr.length - 1; i >= 0; i--) {
            num += arr[i];
            count++
            if (count == k) {
                break;
            }
        }
        arr.push(num);
    }
    return arr;
}
console.log(lastKNumbers(6, 3));
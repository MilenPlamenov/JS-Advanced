function diffOperations(array) {
    let sum = 0;
    let sumOfInvValues = 0;
    let concatValues = '';

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        sumOfInvValues += 1/array[i];
        concatValues += array[i];
    }
    console.log(sum)
    console.log(sumOfInvValues);
    console.log(concatValues);
}

diffOperations([1, 2, 3])
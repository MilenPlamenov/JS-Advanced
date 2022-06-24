function negativePositiveNumbers(arr) {
    mutatedArr = [];
    for (let element of arr) {
        if (element < 0) {
            mutatedArr.unshift(element);
        } else {
            mutatedArr.push(element);
        }
    }
    return mutatedArr;
}
let x = arr => Number(arr[0]) + Number(arr[arr.length - 1]);

console.log(x([1, 3, 8888]));

function sumFL(arr) {
    return Number(arr[0]) + Number(arr[arr.length - 1]);
}
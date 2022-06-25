function rotateArr(arr, n) {
    for (let i = 0; i < n; i++) {
        arr.unshift(arr.pop());
    }
    return arr.join(' ');
}

console.log(rotateArr(['1', 
'2', 
'3', 
'4'], 
2))
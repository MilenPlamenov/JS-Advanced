function printEveryNthEl(arr, n) {
    res = [];
    for (let i = 0; i< arr.length; i++) {
        if (i % n == 0) {
            res.push(arr[i])
        }
    }
    return res;
}

console.log(printEveryNthEl(['5', 
'20', 
'31', 
'4', 
'20'], 
2))
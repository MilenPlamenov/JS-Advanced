function solve(arr) {
    let subarr = [];
    let maxEl = arr[0];
    for (el of arr) {
        if (el >= maxEl) {
            subarr.push(el);
            maxEl = el;
        }
    }
    return subarr;
}


function solve2(arr){
    let result = arr.reduce((acc, curr, index, arr) => {
        if(curr >= Math.max(...acc)){
            acc.push(curr);
        }
        return acc;
    }, []);
    console.log(result);
}

console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]))


solve2([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24])
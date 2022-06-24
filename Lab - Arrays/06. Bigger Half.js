function biggerHalf(arr) {
    arr.sort(function(a, b) {
        return a - b;
      });
    
      return arr.slice(arr.length / 2);
}

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]))
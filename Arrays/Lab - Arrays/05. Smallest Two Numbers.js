function smallestTwoNumbers(arr) {
    arr.sort(function(a, b) {
        return a - b;
      });
    return [arr[0], arr[1]].join(' ');
}

console.log(smallestTwoNumbers([30, 15, 50, 5]))
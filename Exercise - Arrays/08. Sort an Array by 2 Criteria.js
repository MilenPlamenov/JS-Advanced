function solve(arr) {
    arr.sort(function(a, b){
        // ASC  -> a.length - b.length
        // DESC -> b.length - a.length
        return a.length - b.length || a.localeCompare(b);
      });

    console.log(arr.join('\n'));
}
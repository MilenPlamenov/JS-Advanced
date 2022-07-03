function rearrangeArray(arr)
{
    // Sorting the array elements
    arr.sort(function(a, b) {
        return a - b;
      });
 
    // To store modified array
    let tempArr = new Array(arr.length);
     
    // Adding numbers from sorted array 
    // to new array accordingly
    let ArrIndex = 0;
 
    // Traverse from begin and end simultaneously
    for (let i = 0, j = arr.length-1; i <= arr.length / 2
         || j > arr.length / 2; i++, j--) {
                                     
        if(ArrIndex < arr.length)
        {
            tempArr[ArrIndex] = arr[i];
            ArrIndex++;
        }
         
        if(ArrIndex < arr.length)
        {
            tempArr[ArrIndex] = arr[j];
            ArrIndex++;
        }
    }
 
    // Modifying original array
    for (let i = 0; i < arr.length; i++)
        arr[i] = tempArr[i];

    return arr;
}

console.log(rearrangeArray([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))


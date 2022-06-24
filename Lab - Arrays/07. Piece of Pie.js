function pieceOfPie(arr, startingPoint, endingPoint) {

    indexOfStartingPoint = arr.indexOf(startingPoint);
    indxOfEndingPoint = arr.indexOf(endingPoint) + 1;
    return arr.slice(indexOfStartingPoint, indxOfEndingPoint);
}

console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'))
function strLength(inputOne, inputTwo, inputThree) {
    strOne = inputOne;
    strTwo = inputTwo;
    strThree = inputThree;
    let strLenSum = strOne.length + strTwo.length + strThree.length;
    let strLenAverage = Math. floor((strOne.length + strTwo.length + strThree.length) / 3);
    console.log(strLenSum);
    console.log(strLenAverage);
}

strLength('chocolate', 'ice cream', 'cake');
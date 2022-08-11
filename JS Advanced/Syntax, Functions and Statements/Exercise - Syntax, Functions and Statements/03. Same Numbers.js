function sameNum(n) {
    let nStr = String(n);
    let firstChar = nStr[0];
    let isSame = true;
    let sumOfDigits = Number(nStr[0]);
    for (let i = 1; i< nStr.length; i ++){
        sumOfDigits += Number(nStr[i]);
        if (nStr[i] !== firstChar) {
            isSame = false;
        }
    }
    if (isSame) {
        console.log('true');
    } else {
        console.log('false');
    }
    console.log(sumOfDigits);
}

sameNum(1234)
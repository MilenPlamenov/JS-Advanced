function sumOfAllNumbers(n, m) {
    let numberOne = Number(n);
    let numberTwo = Number(m);
    let sumOfAllNums = 0;
    for (numberOne ; numberOne<=numberTwo; numberOne++){
        sumOfAllNums += numberOne;
    }
    console.log(sumOfAllNums);
}



sumOfAllNumbers(1, 5);
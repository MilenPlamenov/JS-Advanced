function operationsOnNum(numAsStr, commandOne, commandTwo, commandThree, commandFour, commandFive) {
    let num = Number(numAsStr);
    let commandArray = [commandOne, commandTwo, commandThree, commandFour, commandFive];
    for (let i = 0; i<5; i++){
        currentCommand = commandArray[i];
        if (currentCommand === 'chop') {
            num /= 2;
        } else if (currentCommand === 'dice') {
            num = Math. sqrt(num);
        } else if (currentCommand === 'spice') {
            num++;
        } else if (currentCommand === 'bake') {
            num *= 3;
        } else {
            twentyPercentOfTheNum = num * 0.2;
            num -= twentyPercentOfTheNum;
        }
        console.log(num);
    }
}


operationsOnNum('32', 'chop', 'chop', 'chop', 'chop', 'chop');
operationsOnNum('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
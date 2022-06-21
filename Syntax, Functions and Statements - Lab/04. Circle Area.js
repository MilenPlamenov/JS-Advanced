function circleArea(input) {
    if (typeof input === "number") {
        let result = 0;
        result = Math.PI * input ** 2;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }
}


circleArea(5);
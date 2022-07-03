function solve(car) {
    let engine = {};
    if (car.power <= 90) {
        engine = { power: 90, volume: 1800 };
    } else if (car.power <= 120) {
        engine = { power: 120, volume: 2400 };
    } else {
        engine = { power: 200, volume: 3500 };
    }
    let carriage = {
        type: car.carriage,
        color: car.color, 
    };
    if (car.wheelsize % 2 === 0){
        car.wheelsize -= 1;
    }
    let wheelsize = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize];

    let newCar = {
        model: car.model,
        engine: engine,
        carriage: carriage,
        wheels: wheelsize
    };
    return newCar;
}


let car = { model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 
}

console.log(solve(car));
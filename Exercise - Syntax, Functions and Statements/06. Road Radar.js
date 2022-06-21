function roadRadar(speed, area) {
    let limit;
    if (area === 'motorway') {
        limit = 130;
    } else if (area === 'interstate') {
        limit = 90;
    } else if (area === 'city') {
        limit = 50;
    } else if (area === 'residential') {
        limit = 20; 
    }

    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    } else {
        let difference = speed - limit;
        let status = '';
        if (difference <= 20) {
            status = 'speeding';
        } else if (40 >= difference) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
    }
}

roadRadar(40, 'city');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');
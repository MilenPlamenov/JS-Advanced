function solve(arr) {
    result = [];
    for (el of arr) {
        el.trim();
        let currState = el.split('|');
        currState = currState.filter(element => {
            return element !== '';
          });
        
        currState = currState.map(element => {
            return element.trim();
          });
        town = currState[0];
        latitude = Number(Number(currState[1]).toFixed(2));
        longitude = Number(Number(currState[2]).toFixed(2));
        let curr = {Town: town, Latitude: latitude, Longitude: longitude};
        result.push(curr);
    }
    result.shift()

    let finalResult = JSON.stringify(result);
    console.log(finalResult);
}


solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);


// I dont like this solution, but it works tho :D
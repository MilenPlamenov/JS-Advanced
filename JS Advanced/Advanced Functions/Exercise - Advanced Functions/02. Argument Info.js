function solve(...arguments) {
    res = {};
    arguments.forEach(element => {
        if (!res[typeof element]) {
            res[typeof element] = 1;
        } else {
            res[typeof element]++;
        }
        console.log(`${typeof element}: ${element}`)
    });
    let sortedInDesc = Object.entries(res).sort((a, b) => b[1] - a[1]);
    for ([k, v] of sortedInDesc) {
        console.log(`${k} = ${v}`)
    };
}

solve('cat', 42, function () { console.log('Hello world!'); })
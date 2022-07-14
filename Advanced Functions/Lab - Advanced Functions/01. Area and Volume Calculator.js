function solve(area, vol, input) {
    let res = [];
    input = JSON.parse(input);
    input.forEach(element => {
        let areaObj = area.call(element);
        let volObj = vol.call(element);
        res.push({area: areaObj, volume: volObj});
    });
    return res;
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`)
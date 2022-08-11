
const Person = require('./01 Person')

function getPeople () {
    const data = [
        ['Anna', 'Simpson', 22, 'anna@yahoo.com'],
        ['SoftUni'],
        ['Stephan', 'Johnson', 25],
        ['Gabriel', 'Peterson', 24, 'g.p@gmail.com'],
    ]

    return data.map(x => new Person(...x));
}
class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function ticketFactory(arr, typeSort) {
    res = [];
    arr.forEach(ticket => {
        [tDestination, tPrice, tStatus] = ticket.split('|');
        res.push(new Ticket(tDestination, Number(tPrice), tStatus));
    })
    
    res.sort((a, b) => {
        return typeof a[typeSort] === 'number'
            ? a[typeSort] - b[typeSort]
            : a[typeSort].localeCompare(b[typeSort])
    })

    return res;
}


ticketFactory(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination')
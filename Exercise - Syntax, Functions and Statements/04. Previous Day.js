function getPreviousDay(year, month, day) {
    date = new Date(year, month, day);
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);
    console.log(`${previous.getFullYear()}-${previous.getMonth()}-${previous.getDate()}`);
}

getPreviousDay(2016, 9, 30);
getPreviousDay(2016, 10, 1);
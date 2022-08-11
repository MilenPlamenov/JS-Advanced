function attachEventsListeners() {

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let daysBtn = document.getElementById("daysBtn");
    let hoursBtn = document.getElementById("hoursBtn");
    let minutesBtn = document.getElementById("minutesBtn");
    let secondsBtn = document.getElementById("secondsBtn");


    function solve (sec) {
        const day = sec / (24 * 60 * 60);
        const hour = sec / (60 * 60);
        const minute = sec / 60;
        const second = sec;

        days.value = day;
        hours.value = hour;
        minutes.value = minute;
        seconds.value = second;
    }

    daysBtn.addEventListener('click', () => {
        solve(+days.value * 86400);
    });

    hoursBtn.addEventListener('click', () => {
        solve(+hours.value * 3600);
    });

    minutesBtn.addEventListener('click', () => {
        solve(+minutes.value * 60);
    });

    secondsBtn.addEventListener('click', () => {
        solve(+seconds.value);
    });
}
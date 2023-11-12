function navruz() {
    const ramadan = new Date('9 March, 2024, 00:00:00').getTime();
    const now = new Date().getTime();

    const gen = ramadan - now;

    let sec = 1000;
    let min = sec * 60;
    let hour = min * 60;
    let day = hour * 24;

    let d = Math.floor(gen / (day));
    let h = Math.floor(gen % (day) / (hour));
    let m = Math.floor(gen % (hour) / (min));
    let s = Math.floor(gen % (min) / (sec));

    document.querySelector('.day').innerHTML = d + `<em style="fonst-size: 15px"><br>days</em>`;
    document.querySelector('.hour').innerHTML = h + "<br>hours";
    document.querySelector('.min').innerHTML = m + "<br>minutes";
    document.querySelector('.sec').innerHTML = s + "<br>seconds";

};

setInterval(navruz, 1000);
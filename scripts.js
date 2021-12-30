function countdown () {
    const countDate = new Date("April 23, 2021 09:30:00").getTime()
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) /  hour);
    const textMinute = Math.floor((gap % hour) /  minute);
    const textSecond= Math.floor((gap % minute) /  second);

    document.querySelector('.day').innerText = textDay
    document.querySelector('.hour').innerText = textDay
    document.querySelector('.minute').innerText = textDay
    document.querySelector('.second').innerText = textDay

    console.log(gap)
};


setInterval(countdown(), 1000)


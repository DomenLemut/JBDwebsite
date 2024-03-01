//const tim = document.getElementById('timer');
const d = document.getElementById('days');
const h = document.getElementById('hours');
const m = document.getElementById('minutes');
const s = document.getElementById('seconds');

var countDownDate = new Date("Apr 15, 2024 20:00:00").getTime();

function updateCountdown() {
    var timeDifference = countDownDate - new Date().getTime();
    
    if (timeDifference > 0) {
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        d.innerText = `${days}`;
        h.innerText = `${hours}`;
        m.innerText = `${minutes}`;
        s.innerText = `${seconds}`;
        // if(hours < 10) hours = "0" + hours;
        // if(seconds < 10) seconds = "0" + seconds;
        // if(minutes < 10) minutes = "0" + minutes;
        // var string = `${days}:${hours}:${minutes}:${seconds}`;
    } else {
        console.log("Countdown expired");
        clearTimeout(timer);
    }
}

updateCountdown();

// Update the countdown 100ms
var timer = setInterval(updateCountdown, 100);

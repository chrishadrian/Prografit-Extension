const startingMinutes = 19.95;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('stopwatch');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;;
    
    seconds = seconds <  10 ? '0' + seconds : seconds;
    
    countdownEl.innerHTML = `${minutes} : ${seconds}`;
    if (minutes === 20) {
        alert("Drink your water");
        time = 0;
    }
    time++;
}



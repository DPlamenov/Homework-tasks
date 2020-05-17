function stopwatch() {
    let startButton = document.querySelector('#startBtn');
    let stopButton = document.querySelector('#stopBtn');
    startButton.addEventListener('click', start);
    stopButton.addEventListener('click', stop);

    let time = document.querySelector('#time');

    let interval;

    function start() {
        time.textContent = `00:00`;
        let minutes = 0;
        let seconds = 1;

        interval = setInterval(function () {
            time.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            seconds++;

            if(seconds === 60){
                seconds = 0;
                minutes++;
            }
        }, 1000);

        startButton.setAttribute('disabled', 'disabled');
        stopButton.removeAttribute('disabled');
    }
    
    function stop() {
        clearInterval(interval);
        stopButton.setAttribute('disabled', 'disabled');
        startButton.removeAttribute('disabled');

    }
}
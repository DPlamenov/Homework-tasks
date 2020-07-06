function solve() {
    const info = document.querySelector('.info');
    const departButton = document.querySelector('#depart');
    const arriveButton = document.querySelector('#arrive');
    let stopId = 'depot';
    let stopName = 'Depot';

    function depart() {
        fetch(`https://judgetests.firebaseio.com/schedule/${stopId}.json`)
            .then(response => response.json())
            .then(response => {
                stopId = response.next;
                stopName = response.name;
                arriveButton.removeAttribute('disabled');
                departButton.setAttribute('disabled', true);
                info.textContent = `Next stop ${response.name}`;
            });
    }

    function arrive() {
        departButton.removeAttribute('disabled');
        arriveButton.setAttribute('disabled', true);
        info.textContent = `Arriving at ${stopName}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
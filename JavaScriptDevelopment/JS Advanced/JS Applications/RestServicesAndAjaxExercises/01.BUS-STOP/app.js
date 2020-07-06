function getInfo() {
    const stopId = document.querySelector('#stopId').value;
    const stopName = document.querySelector('#stopName');
    const buses = document.querySelector('#buses');


    stopName.textContent = '';
    buses.innerHTML = '';


    fetch(`https://judgetests.firebaseio.com/businfo/${stopId}.json`)
        .then(response => response.json())
        .then(response => {
            render(response);
        })
        .catch(error => {
            renderError();
        });


    /**
     *
     * @param response {Object}
     * @param response.buses {Object}
     * @param response.name {string}
     */
    function render(response) {
        stopName.textContent = response.name;
        Object.entries(response.buses)
            .forEach(bus => {
                const currentLi = document.createElement('li');
                currentLi.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;

                buses.appendChild(currentLi);
            });
    }

    function renderError() {
        stopName.textContent = 'Error';
    }
}
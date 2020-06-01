function attachEventsListeners() {
    let convertBtn = document.querySelector('#convert');
    convertBtn.addEventListener('click', convert);

    function convert(e) {
        let convertFrom = document.querySelector('#inputUnits').value;
        let convertTo = document.querySelector('#outputUnits').value;

        let inputDistance = document.querySelector('#inputDistance').value;
        let outputElement = document.querySelector('#outputDistance');
        let outputToMeters = 0;
        if (convertFrom === 'km') {
            outputToMeters = inputDistance * 1000;
        } else if (convertFrom === 'm') {
            outputToMeters = inputDistance * 1;
        } else if (convertFrom === 'cm') {
            outputToMeters = inputDistance / 100;
        } else if (convertFrom === 'mm') {
            outputToMeters = inputDistance / 100 / 10;
        } else if (convertFrom === 'mi') {
            outputToMeters = inputDistance * 1609.34;
        } else if (convertFrom === 'yrd') {
            outputToMeters = inputDistance * 0.9144;
        } else if (convertFrom === 'ft') {
            outputToMeters = inputDistance * 0.3048;
        } else if (convertFrom === 'in') {
            outputToMeters = inputDistance * 0.0254;
        }
        let result = 0;
        if (convertTo === 'km') {
            result = outputToMeters / 1000;
        } else if (convertTo === 'm') {
            result = outputToMeters;
        } else if (convertTo === 'cm') {
            result = outputToMeters * 100;
        } else if (convertTo === 'mm') {
            result = outputToMeters * 100 * 10;
        } else if (convertTo === 'mi') {
            result = outputToMeters * 0.000621371192;
        } else if (convertTo === 'yrd') {
            result = outputToMeters * 1.0936133;
        } else if (convertTo === 'ft') {
            result = outputToMeters * 3.2808399;
        } else if (convertTo === 'in') {
            result = outputToMeters * 39.3700787;
        }
        // alert(result.toFixed(3));
        outputElement.value = result;
    }
}
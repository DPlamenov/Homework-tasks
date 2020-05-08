function attachEventsListeners() {
    let inputElements = {
        days: document.querySelector('#days'),
        hours: document.querySelector('#hours'),
        minutes: document.querySelector('#minutes'),
        seconds: document.querySelector('#seconds'),
    };

    let buttons = {
        days: document.querySelector('#daysBtn'),
        hours: document.querySelector('#hoursBtn'),
        minutes: document.querySelector('#minutesBtn'),
        seconds: document.querySelector('#secondsBtn'),
    };

    Object.values(buttons).forEach(e => {
        e.addEventListener('click', convert);
    });

    function convert(e) {
        let target = e.target;
        let parent = target.parentNode;

        let clicked = parent.querySelector('label').getAttribute('for');
        let clickedElement = inputElements[clicked];
        let value = clickedElement.value;

        if (clicked === 'days') {
            inputElements.hours.value = value * 24;
            inputElements.minutes.value = value * 24 * 60;
            inputElements.seconds.value = value * 24 * 60 * 60;
        } else if (clicked === 'hours') {
            inputElements.days.value = value / 24;
            inputElements.minutes.value = value * 60;
            inputElements.seconds.value = value * 60 * 60;
        } else if (clicked === 'minutes') {
            inputElements.days.value = value / 60 / 24;
            inputElements.hours.value = value / 60;
            inputElements.seconds.value = value * 60;
        } else if (clicked === 'seconds') {
            inputElements.days.value = value / 24 / 60 / 60;
            inputElements.hours.value = value / 60 / 60;
            inputElements.minutes.value = value / 60;
            // inputElements.seconds.value = value * 60 * 60;
        }


    }
}
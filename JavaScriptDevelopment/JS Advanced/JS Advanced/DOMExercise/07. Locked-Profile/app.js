function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll('button'));

    buttons.forEach(e => {
        e.addEventListener('click', showInfo);
    });


    function showInfo(e) {

        let target = e.target;
        let parent = target.parentNode;

        let isLocked = checkIsLocked(parent);
        if (!isLocked) {
            let hiddenDiv = parent.querySelector('div');
            hiddenDiv.style.display = 'block';
            let btn = parent.querySelector('button');
            btn.addEventListener('click', hideInfo);
            btn.removeEventListener('click', showInfo);
            btn.textContent = 'Hide it';
        }
    }

    function hideInfo(e) {
        let target = e.target;
        let parent = target.parentNode;
        let isLocked = checkIsLocked(parent);
        if (!isLocked) {
            let hiddenDiv = parent.querySelector('div');
            hiddenDiv.style.display = 'none';
            let btn = parent.querySelector('button');
            btn.addEventListener('click', showInfo);
            btn.removeEventListener('click', hideInfo);
            btn.textContent = 'Show more';
        }
    }

    function checkIsLocked(profile) {
        let radioButton = profile.querySelector('input[type="radio"]');
        return radioButton.checked;
    }
}
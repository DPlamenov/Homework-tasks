function focus() {
    let allInputs = Array.from(document.querySelectorAll('input'));

    allInputs.forEach(e => e.addEventListener('focus', getFocus));
    allInputs.forEach(e => e.addEventListener('blur', lostFocus));

    function getFocus(e) {
        let target = e.target;
        let parent = target.parentNode;

        parent.classList.add('focused');
    }

    function lostFocus(e) {
        let target = e.target;
        let parent = target.parentNode;

        parent.classList.remove('focused');
    }
}
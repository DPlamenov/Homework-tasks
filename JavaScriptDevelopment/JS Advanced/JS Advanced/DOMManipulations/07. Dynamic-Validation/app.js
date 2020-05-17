function validate() {
    let inputEmailElement = document.querySelector('#email');

    inputEmailElement.addEventListener('change', change);

    function change(e) {
        let pattern = /[a-z]+@[a-z]+\.[a-z]+/g;
        let email = inputEmailElement.value;

        if (!pattern.test(email)) {
            inputEmailElement.classList.add('error');
        } else {
            inputEmailElement.classList.remove('error');
        }
    }
}
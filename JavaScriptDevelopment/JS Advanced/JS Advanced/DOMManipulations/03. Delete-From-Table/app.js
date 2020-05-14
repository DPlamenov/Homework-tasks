function deleteByEmail() {
    let resultElement = document.querySelector('#result');

    let email = document.querySelector('input').value;
    let tableElement = document.querySelector('#customers');

    let allTd = Array.from(tableElement.querySelectorAll('td'));

    let isFind = false;

    allTd.forEach(function (element) {
        if (email === element.textContent) {
            isFind = true;

            let parent = element.parentNode;
            parent.remove();
            resultElement.innerText = 'Deleted.';
        }
    });

    if (!isFind) {
        resultElement.innerText = 'Not found.';
    }
}
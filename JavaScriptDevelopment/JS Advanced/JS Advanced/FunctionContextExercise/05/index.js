function solve() {
    let tbody = document.querySelector('tbody');
    let tableRows = Array.from(tbody.querySelectorAll('tr'));

    tbody.addEventListener('click', function (e) {
        let target = e.target;
        let parentNode = target.parentNode;

        tableRows.filter(e => e !== parentNode)
            .map(e => e.style.backgroundColor = '');

        if (parentNode.style.backgroundColor !== '') {
            parentNode.style.backgroundColor = '';
        } else {
            parentNode.style.backgroundColor = '#403e5c';
        }
    });
}

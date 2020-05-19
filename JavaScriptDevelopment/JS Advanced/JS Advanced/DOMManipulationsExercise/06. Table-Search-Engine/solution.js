function solve() {
    let searchBtn = document.querySelector('#searchBtn');

    searchBtn.addEventListener('click', search);

    function search() {
        let allTr = Array.from(document.querySelectorAll('tbody tr'));

        allTr.forEach(function (el) {
            el.classList.remove('select');
        });

        let searchInput = document.querySelector('#searchField').value;

        allTr.forEach(function (element) {
            let td = Array.from(element.querySelectorAll('td'))
                .map(e => e.innerText);

            for (let textContent of td) {
                if(textContent.includes(searchInput)){
                    element.classList.add('select');
                }
            }
        });
    }
}
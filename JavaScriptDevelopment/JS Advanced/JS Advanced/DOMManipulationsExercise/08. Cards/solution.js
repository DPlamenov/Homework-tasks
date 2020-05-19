function solve() {
    let currentHistory = [];
    let img = Array.from(document.querySelectorAll('img'));
    img.forEach(e => e.addEventListener('click', reveal));

    function reveal(e) {
        let target = e.target;

        if(target.getAttribute('src') === "images/whiteCard.jpg"){
            return;
        }
        let spans = Array.from(document.querySelectorAll('span'));
        spans = [spans[0], spans[2]];


        if (spans[0].textContent !== '' && spans[1].textContent !== '') {
            spans.forEach(e => e.innerText = '');
        }

        let currentTargetParent = target.parentNode.getAttribute('id').includes(1) ? 1 : 2;

        if (spans[0].textContent === '' && spans[1].textContent === '') {
            target.src = "images/whiteCard.jpg";
            if (currentTargetParent === 1) {
                spans[0].textContent = target.name;
            } else {
                spans[1].textContent = target.name;
            }

            currentHistory.push(target);
        } else if (spans[currentTargetParent - 1].textContent === '') {
            target.src = "images/whiteCard.jpg";
            spans[currentTargetParent - 1].textContent = target.name;
            currentHistory.push(target);
        }

        if (spans[0].textContent !== '' && spans[1].textContent !== '') {
            let history = document.getElementById('history');

            currentHistory.sort((a, b) => {
                return a.name - b.name;
            });

            currentHistory[0].style.border = '2px solid red';
            currentHistory[1].style.border = '2px solid green';

            currentHistory.sort((a, b) => {
                return a.parentNode.getAttribute('id').localeCompare(b.parentNode.getAttribute('id')) ;
            });
            let p = `[${currentHistory[0].name} vs ${currentHistory[1].name}] `;
            history.innerText += p;
            currentHistory = [];
        }
    }
}
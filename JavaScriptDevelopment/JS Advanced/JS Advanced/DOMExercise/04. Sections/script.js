function create(words) {
    let container = document.querySelector('#content');

    words.forEach(e => {
        let div = document.createElement('div');
        let paragraph = document.createElement('p');

        paragraph.innerText = e;
        paragraph.style.display = 'none';
        div.addEventListener('click', showParagraph);
        div.appendChild(paragraph);
        container.appendChild(div);
    });

    function showParagraph(e) {
        let target = e.target;
        let currentParagraph = target.querySelector('p');
        currentParagraph.style.display = 'block';
    }
}
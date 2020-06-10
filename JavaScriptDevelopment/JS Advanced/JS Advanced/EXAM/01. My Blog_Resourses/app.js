function solve() {
    let createButton = document.querySelector('aside button');
    createButton.addEventListener('click', create);

    function create(e) {
        e.preventDefault();

        let author = document.querySelector('#creator').value;
        let title = document.querySelector('#title').value;
        let category = document.querySelector('#category').value;
        let content = document.querySelector('#content').value;

        let articleSection = document.querySelector('main section');
        let newArticle = document.createElement('article');

        let headingElement = document.createElement('h1');
        headingElement.innerText = title;
        let categoryElement = document.createElement('p');
        categoryElement.innerHTML = `Category:<strong>${category}</strong>`;
        let creatorElement = document.createElement('p');
        creatorElement.innerHTML = `Creator:<strong>${author}</strong>`;
        let contentElement = document.createElement('p');
        contentElement.innerHTML = content;

        newArticle.appendChild(headingElement);
        newArticle.appendChild(categoryElement);
        newArticle.appendChild(creatorElement);
        newArticle.appendChild(contentElement);

        let buttons = document.createElement('div');
        buttons.classList.add('buttons');

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('btn');
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', deleteArticle);
        deleteButton.innerText = `Delete`;
        buttons.appendChild(deleteButton);

        let archiveButton = document.createElement('button');
        archiveButton.classList.add('btn');
        archiveButton.classList.add('archive');
        archiveButton.addEventListener('click', archiveArticle);
        archiveButton.innerText = `Archive`;
        buttons.appendChild(archiveButton);

        newArticle.appendChild(buttons);
        articleSection.appendChild(newArticle);
    }

    function deleteArticle(e) {
        let target = e.target;
        let article = target.parentNode.parentNode;

        article.remove();
    }

    function archiveArticle(e) {
        let section = document.querySelector('.archive-section ul');
        let target = e.target;
        let article = target.parentNode.parentNode;
        let title = article.querySelector('h1').innerText;

        article.remove();
        let listItem = document.createElement('li');
        listItem.innerText = title;
        section.appendChild(listItem);

        let cloneList = section.cloneNode(false);
        Array.from(section.querySelectorAll('li'))
            .sort((a, b) => {
                return a.innerText.localeCompare(b.innerText);
            }).map(e => cloneList.appendChild(e));

        section.parentNode.replaceChild(cloneList, section);
    }
}

function solve() {
    let createButton = document.querySelector('aside button');
    createButton.addEventListener('click', createArticle);

    function createArticle(e) {
        e.preventDefault();
        let articleContent = document.querySelector('main section');


        let creator = document.querySelector('#creator').value;
        let title = document.querySelector('#title').value;
        let category = document.querySelector('#category').value;
        let content = document.querySelector('#content').value;


        const article = document.createElement('article');
        let _title = document.createElement('h1');
        _title.innerText = title;
        let _category = document.createElement('p');
        _category.innerHTML = `Category: <strong>${category}</strong>`;
        let _creator = document.createElement('p');
        _creator.innerHTML = `Creator: <strong>${creator}</strong>`;
        let _content = document.createElement('p');
        _content.innerText = content;
        article.appendChild(_title);
        article.appendChild(_category);
        article.appendChild(_creator);
        article.appendChild(_content);

        let buttons = document.createElement('div');
        buttons.classList.add('buttons');
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'delete');
        deleteButton.innerText = 'Delete';
        let archiveButton = document.createElement('button');
        archiveButton.classList.add('btn', 'archive');
        archiveButton.innerText = 'Archive';

        deleteButton.addEventListener('click', deleteArticle);
        archiveButton.addEventListener('click', archiveArticle);

        buttons.appendChild(deleteButton);
        buttons.appendChild(archiveButton);
        article.appendChild(buttons);
        articleContent.appendChild(article);

    }

    function deleteArticle(e) {
        let target = e.target;
        let parentNode = target.parentNode.parentNode;
        parentNode.remove();
    }

    function archiveArticle(e) {
        let list = document.querySelector('ul');
        const newUl = list.cloneNode(false);
        let title = e.target.parentNode.parentNode.querySelector('h1').innerText;
        let listItem = document.createElement('li');
        listItem.innerText = title;
        list.appendChild(listItem);

        let allItems = Array.from(list.querySelectorAll('li'))
            .sort((a, b) => {
                return a.innerText.localeCompare(b.innerText);
            });

        allItems.forEach(function (el) {
            newUl.appendChild(el);
        });

        list.parentNode.replaceChild(newUl, list);
        deleteArticle(e);
    }
}

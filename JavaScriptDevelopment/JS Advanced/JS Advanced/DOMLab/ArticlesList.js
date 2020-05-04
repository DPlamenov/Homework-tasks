function createArticle() {
    let $elements = {
        sectionList: document.querySelector('#articles'),
        title: document.querySelector('#createTitle'),
        content: document.querySelector('#createContent')
    };

    let title = $elements.title.value;
    let content = $elements.content.value;

    if (title !== '' && content !== '') {
        let article = document.createElement('article');
        let heading = document.createElement('h3');
        heading.innerText = title;
        let p = document.createElement('p');
        p.innerText = content;

        article.appendChild(heading);
        article.appendChild(p);

        $elements.sectionList.appendChild(article);

        $elements.title.value = '';
        $elements.content.value = '';
    }
}

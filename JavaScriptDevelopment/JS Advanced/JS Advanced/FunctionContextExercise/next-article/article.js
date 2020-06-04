function getArticleGenerator(articles) {
    let container = document.querySelector('#content');
    return function () {

        if (articles.length > 0) {
            let article = document.createElement('article');
            article.innerText = articles.shift();
            container.appendChild(article);
        }
    }
}
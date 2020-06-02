function solve() {
    let allLinks = Array.from(document.getElementsByClassName('link-1'));
    allLinks.forEach((el) => {
        el.addEventListener('click', visitSite);
    });
    
    function visitSite(e) {
        let target = e.target;
        let parent = target.parentNode;

        let visited = parent.querySelector('p');
        let visitedBefore = Number((visited.innerText).match(/\d+/)[0]);

        visited.innerText = `visited ${visitedBefore + 1} times`;
    }
}
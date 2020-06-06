// eslint-disable-next-line no-unused-vars
function f() {
    function clickUl(e) {
        e.stopImmediatePropagation();
        if (e.target.nodeName !== 'LI') {
            return;
        }

        alert(e.target.textContent);
    }



    const ul = document.querySelector('#list');
    ul.addEventListener('click', clickUl);
    ul.addEventListener('click', function (e) {
        console.log(e);
    });
}

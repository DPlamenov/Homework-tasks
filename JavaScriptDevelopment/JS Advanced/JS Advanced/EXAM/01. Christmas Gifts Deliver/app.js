function solution() {
    let buttonAdd = document.querySelector('div > button');
    let sections = Array.from(document.querySelectorAll('section'));
    buttonAdd.addEventListener('click', add);


    function add() {
        let s = Array.from(document.querySelectorAll('section ul'))[0];
        let nameInput = document.querySelector('input');
        let name = nameInput.value;

        let listItem = document.createElement('li');
        listItem.textContent = name;
        listItem.classList.add('gift');

        let buttonSend = document.createElement('button');
        buttonSend.id = 'sendButton';
        buttonSend.innerText = 'Send';
        buttonSend.addEventListener('click', send);

        let buttonDiscard = document.createElement('button');
        buttonDiscard.id = 'discardButton';
        buttonDiscard.innerText = 'Discard';
        buttonDiscard.addEventListener('click', discard);

        listItem.appendChild(buttonSend);
        listItem.appendChild(buttonDiscard);

        s.appendChild(listItem);
        let children = Array.from(s.querySelectorAll('li'));
        let cloned = s.cloneNode(false);
        s.innerHTML = '';
        children.sort((a, b) => {
            return a.textContent.localeCompare(b.textContent);
        }).map(e => s.appendChild(e));


        nameInput.value = '';
    }

    function send(e) {
        let sendList = Array.from(document.querySelectorAll('ul'))[1];
        let target = e.target;
        let parentNode = target.parentNode;

        let name = parentNode.textContent.replace('SendDiscard', '');
        parentNode.remove();

        let listItem = document.createElement('li');
        listItem.innerText = name;
        sendList.appendChild(listItem);
    }

    function discard(e) {
        let discardList = Array.from(document.querySelectorAll('ul'))[2];
        let target = e.target;
        let parentNode = target.parentNode;
        let name = parentNode.textContent.replace('SendDiscard', '');
        parentNode.remove();
        let listItem = document.createElement('li');
        listItem.innerText = name;
        discardList.appendChild(listItem);
    }
}
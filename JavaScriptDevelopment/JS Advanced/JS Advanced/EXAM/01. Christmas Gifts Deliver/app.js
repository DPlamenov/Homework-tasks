function solution() {
    const createGiftButtonElement = document.querySelector('div > button');
    Array.from(document.querySelectorAll('section'));
    createGiftButtonElement.addEventListener('click', add);


    function add() {
        const s = Array.from(document.querySelectorAll('section ul'))[0];
        const nameInput = document.querySelector('input');
        const name = nameInput.value;

        const listItem = document.createElement('li');
        listItem.textContent = name;
        listItem.classList.add('gift');

        const buttonSend = document.createElement('button');
        buttonSend.id = 'sendButton';
        buttonSend.innerText = 'Send';
        buttonSend.addEventListener('click', send);

        const buttonDiscard = document.createElement('button');
        buttonDiscard.id = 'discardButton';
        buttonDiscard.innerText = 'Discard';
        buttonDiscard.addEventListener('click', discard);

        listItem.appendChild(buttonSend);
        listItem.appendChild(buttonDiscard);

        s.appendChild(listItem);
        const children = Array.from(s.querySelectorAll('li'));
        s.innerHTML = '';
        children.sort((a, b) => a.textContent.localeCompare(b.textContent))
            .map((e) => s.appendChild(e));

        nameInput.value = '';
    }

    function send(e) {
        const sendList = Array.from(document.querySelectorAll('ul'))[1];
        const { target } = e;
        const { parentNode } = target;

        const name = parentNode.textContent.replace('SendDiscard', '');
        parentNode.remove();

        const listItem = document.createElement('li');
        listItem.innerText = name;
        sendList.appendChild(listItem);
    }

    function discard(e) {
        const discardList = Array.from(document.querySelectorAll('ul'))[2];
        const { target } = e;
        const { parentNode } = target;
        const name = parentNode.textContent.replace('SendDiscard', '');
        parentNode.remove();
        const listItem = document.createElement('li');
        listItem.innerText = name;
        discardList.appendChild(listItem);
    }
}

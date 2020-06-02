function solve() {
    let sendButton = document.querySelector('#send');
    sendButton.addEventListener('click', send);
    
    
    function send() {
        let chatMsgBox = document.querySelector('#chat_messages');
        let msgInput = document.querySelector('#chat_input');
        let msgDiv = document.createElement('div');
        msgDiv.classList.add('message', 'my-message');
        msgDiv.innerText = msgInput.value;
        msgInput.value = '';

        chatMsgBox.appendChild(msgDiv);
    }
}



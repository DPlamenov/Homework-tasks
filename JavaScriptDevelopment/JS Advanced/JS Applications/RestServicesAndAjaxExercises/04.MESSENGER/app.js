function attachEvents() {
    const submitButton = document.querySelector('#submit');
    const refreshButton = document.querySelector('#refresh');
    const authorInput = document.querySelector('#author');
    const contentInput = document.querySelector('#content');
    const messagesArea = document.querySelector('#messages');


    submitButton.addEventListener('click', function () {
        const { value: author } = authorInput;
        const { value: content } = contentInput;

        fetch('http://localhost:3000/messenger/',
            {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    author,
                    content
                })
            })
            .then(getAllMessages());

        authorInput.value = '';
        contentInput.value = '';
    });

    refreshButton.addEventListener('click', getAllMessages);

    function getAllMessages() {
        messagesArea.value = '';
        fetch('http://localhost:3000/messenger/')
            .then(response => response.json())
            .then(function (e) {
                Object.entries(e)
                    .forEach(function (msg) {
                        const [id, msgData] = msg;
                        messagesArea.value += `${msgData.author}: ${msgData.content}\n`;
                    });
            });
    }
}

attachEvents();
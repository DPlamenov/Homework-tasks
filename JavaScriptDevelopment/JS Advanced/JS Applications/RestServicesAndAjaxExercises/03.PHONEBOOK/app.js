function attachEvents() {
    const loadButton = document.querySelector('#btnLoad');
    const createButton = document.querySelector('#btnCreate');
    const personInput = document.querySelector('#person');
    const phoneInput = document.querySelector('#phone');
    const phoneBookUl = document.querySelector('#phonebook');

    loadButton.addEventListener('click', loadContacts);

    createButton.addEventListener('click', function () {
        const { value: personName } = personInput;
        const { value: phone } = phoneInput;

        fetch('http://localhost:3000/phonebook', {
            method: 'post',
            headers: {
                'content-type': 'text/plain', //not application/json to prevent preflight request (server dont support OPTIONS request)
            },
            body: JSON.stringify({
                person: personName,
                phone
            })
        })
            .then(loadContacts);

        personInput.value = '';
        phoneInput.value = '';
    });

    function renderElement(el) {
        const [key, person] = el;
        console.log(key);
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = `${person.person}: ${person.phone}`;
        deleteButton.textContent = 'Delete';
        li.appendChild(deleteButton);
        phoneBookUl.appendChild(li);

        deleteButton.addEventListener('click', () => {
            fetch('http://localhost:3000/phonebook/' + key, {
                method: 'delete'
            })
                .then(loadContacts);
        });
    }

    function loadContacts() {
        phoneBookUl.innerHTML = '';
        return fetch('http://localhost:3000/phonebook')
            .then(response => response.json())
            .then(response => {
                Object.entries(response)
                    .forEach(function (el) {
                        renderElement(el);
                    });
            });
    }
}

attachEvents();
function notify(message) {
    let notifyElement = document.querySelector('#notification');

    notifyElement.style.display = 'block';
    notifyElement.textContent = message;
    setTimeout(() => {
        notifyElement.style.display = 'none';
    }, 2000);
}
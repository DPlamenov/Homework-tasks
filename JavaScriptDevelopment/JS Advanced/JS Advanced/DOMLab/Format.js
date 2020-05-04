function format() {
    let textToFormat = document.getElementById('input').innerText;

    let sentences = textToFormat.split('.').map(e => e + '.');

    console.log(sentences);
}
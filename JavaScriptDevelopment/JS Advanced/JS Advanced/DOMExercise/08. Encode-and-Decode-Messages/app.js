function encodeAndDecodeMessages() {
    let encodeBtn = Array.from(document.querySelectorAll('button'))[0];
    let decodeBtn = Array.from(document.querySelectorAll('button'))[1];


    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    function encode(e) {
        let inputTextArea = Array.from(document.querySelectorAll('div textarea'))[0];
        let outputTextArea = Array.from(document.querySelectorAll('div textarea'))[1];
        let textToEncode = inputTextArea.value;
        outputTextArea.value = textToEncode.split('')
            .map(e => String.fromCharCode(e.charCodeAt(0) + 1))
            .join('');

        inputTextArea.value = '';
    }

    function decode(e) {
        let textArea = Array.from(document.querySelectorAll('div textarea'))[1];
        let decoded = textArea.value
            .split('')
            .map(e => String.fromCharCode(e.charCodeAt(0) - 1));

        textArea.value = decoded.join('');
    }
}
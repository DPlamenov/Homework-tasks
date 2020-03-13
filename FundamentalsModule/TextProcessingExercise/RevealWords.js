function revealWords(words = '', text = '') {
    words = words.split(', ');
    text = text.split(' ');

    for (let i = 0; i < text.length; i++) {
        for (let element2 of words) {
            if (text[i].length === element2.length && text[i].includes('*')) {
                text[i] = element2;
                let indexOf = words.indexOf(element2);
                words.splice(indexOf, 1);
            }
        }
    }

    console.log(text.join(' '));
}

revealWords('great, test1',
    'softuni is ***** place for ***** new programming languages'
);
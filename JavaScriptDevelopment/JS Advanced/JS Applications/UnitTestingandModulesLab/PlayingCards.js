function solve(face, suit) {
    const card = {};

    const validFaces = [2, 3, 4, 5, 6, 7, 8, 'J', 'Q', 'K', 'A'];
    const validSuits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    if (validFaces.includes(face) && validSuits.hasOwnProperty(suit)) {
        card.toString = function () {
            return `${this.face}${this.suit}`;
        };

        Object.defineProperties(card, {
            'face': {
                get() {
                    return face;
                }
            },
            'suit': {
                get() {
                    return validSuits[suit];
                }
            }
        });

        return card;
    }

    throw new Error('invalid face or suit');
}

let c = solve('J', 'D');
console.log(c.toString());
console.log(c.toString()
    .includes('J'));
console.log(c.toString()
    .includes('\u2666'));
function solve(cards) {
    function cardFactory(cardAsString) {
        let tokens = cardAsString.split('');
        let suit = tokens.pop();
        let face = tokens.join('');
        const card = {};

        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
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

    const allCards = cards.map(card => {
        try {
            return cardFactory(card)
                .toString();
        } catch (e) {
            console.log(`Invalid card: ${card}`);
        }
    });

    if (!allCards.includes(undefined)) {
        console.log(allCards.join(' '));
    }

}

solve(['AS', '10D', 'KH', '2C']);
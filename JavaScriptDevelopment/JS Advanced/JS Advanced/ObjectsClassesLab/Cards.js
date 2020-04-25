(function () {
    let validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card {
        constructor(face, suit) {
            if (validFaces.includes(face) && Object.values(Suits).includes(suit)) {
                this._face = face;
                this._suit = suit;
            } else {
                throw new Error('Unvalid face or Unvalid suit');
            }

        }

        get face() {
            return this._face;
        }

        set face(face) {
            if (validFaces.includes(face)) {
                return this._face = face;
            }
            throw new Error('Unvalid face');
        }

        get suit() {
            return this._suit;
        }

        set suit(suit) {
            if (Object.values(Suits).includes(suit)) {
                return this._suit = suit;
            }
            throw new Error('Unvalid suit');
        }
    }

    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    };
    return {
        Suits: Suits,
        Card: Card
    };
}())
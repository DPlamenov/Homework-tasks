// test('two plus two is four', () => {
//   expect(2 + 2).toBe(4);
// });
//
// test('two minus one is one', () => {
//   expect(2 - 1).toBe(1);
// });

const christmasMovies = require('./christmasMovies');

describe('christmasMovies', function () {
  describe('constructor()', function () {
    test('test structure of new object', function () {
      const object = new christmasMovies();
      expect(object).toEqual({
        movieCollection: [],
        watched: {},
        actors: []
      });
    });
  });

  describe('buyMovie()', function () {
    test('buy movie with one actor', function () {
      const object = new christmasMovies();
      const result = object.buyMovie('t5', ['arnold']);
      expect(result).toEqual('You just got t5 to your collection in which arnold are taking part!');
    });

    test('buy movie with three actor', function () {
      const object = new christmasMovies();
      const result = object.buyMovie('t15', ['arnold', '1', '2']);
      expect(result).toEqual('You just got t15 to your collection in which arnold, 1, 2 are taking part!');
    });

    test('movieCollection after buy movie', function () {
      const object = new christmasMovies();
      object.buyMovie('t5', ['arnold']);
      expect(object.movieCollection).toEqual([
        {name: 't5', actors: ['arnold']}
      ])
    });

    test('movie with same actors', function () {
      const object = new christmasMovies();
      const result = object.buyMovie('t15', ['arnold', '1', '2', 'arnold']);
      expect(result).toEqual('You just got t15 to your collection in which arnold, 1, 2 are taking part!');
    });

    test('already have this movie', function (){
      const object = new christmasMovies();
      object.buyMovie('t5', ['arnold']);
      const error = () => object.buyMovie('t5', ['arnold', '1', '2', 'arnold']);
      expect(error).toThrow('You already own t5 in your collection!');
    });
  });
});
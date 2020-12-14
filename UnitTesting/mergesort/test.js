const assert = require('chai').assert;
const sort = require('./sort');

function _sort(array) {
  return array.slice().sort((a, b) => {
    return Number(a) - Number(b);
  });
}

describe('general', () => {
  it('1', () => {
    const array = [1, 2];
    assert.deepEqual(sort(array), _sort(array))
  });

  it('2', () => {
    const array = [1, 5, 2];
    assert.deepEqual(sort(array), _sort(array))
  });

  it('3', () => {
    const array = [1, 5, 2, 1, 5];
    assert.deepEqual(sort(array), _sort(array))
  });

  it('4', () => {
    const array = [1, 5, 2, 11, 8, 4, 1, 3, 3, 5];
    assert.deepEqual(sort(array), _sort(array))
  });
});

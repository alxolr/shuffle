/* global describe it */

const shuffle = require('../modules/shuffle');
const assert = require('assert');

describe('Shuffle', () => {
  it('should return null given null', () => {
    assert.equal(shuffle(null), null);
  });

  it('should return an empty array when given empty array', () => {
    assert.deepEqual(shuffle([]), []);
  });

  it('should return the same array with a single value', () => {
    assert.deepEqual(shuffle([1]), [1]);
  });

  it('should return a shuffled array given length > 1 and different values', () => {
    const list = [1, 2, 3, 4];
    assert.notDeepEqual(shuffle(list), list);
  });

  it('should return a shuffled array given object values', () => {
    const list = [{ name: 'Johnny' }, { name: 'Alex' }, { name: 'George' }, { name: 'Marta' }];
    assert.notDeepEqual(shuffle(list), list);
  });
});

const chai = require('chai');
const expect = chai.expect;

const sum = require('./index');

describe('sum', function() {
  it('should sum from a to b', () => {
    expect(sum(1, 1)).to.equal(1);
    expect(sum(1, 2)).to.equal(3);
    expect(sum(3, 7)).to.equal(25);
  });
});
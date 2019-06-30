const expect = require('chai').expect;
const server = require('./../server');

describe('server running test', () => {
  it('should return a string', () => {
    expect('ci with jenkins').to.equal('ci with jenkins');
  });
});

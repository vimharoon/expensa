const expect = require('chai').expect;
const server = require('./../server');

describe('server running test', () => {
  it('should return a string', () => {
    expect('ci with cercleci').to.equal('ci with cercleci');
  });
});

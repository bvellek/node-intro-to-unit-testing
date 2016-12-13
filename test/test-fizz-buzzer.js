const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `adder` function
describe('fizzBuzzer', function() {

  // test the normal cases
  // range of normal inputs, including
  //notable cases like negative answers
  it('should output fizz-buzz for multiples of 15', function() {
    const arr = [-45, 15, 60];
    arr.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('fizz-buzz')
    });
  });

  it('should output buzz for multiples of 5 but not 3', function() {
    const arr = [-25, 5, 100];
    arr.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('buzz')
    });
  });

  it('should output fizz for multiples of 3 but not 5', function() {
    const arr = [-9, 6, 21];
    arr.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('fizz')
    });
  });

  it('should output number for numbers not divisible by 5 or 3', function() {
    const arr = [-8, 2, 19];
    arr.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal(input)
    });
  });

//throw error for non number inputs
  it('should raise error if args not numbers', function() {
    const arr = ['a', 'fizz', true, function(){a+b}, {1:'a', 2:'b'}]
    arr.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
})

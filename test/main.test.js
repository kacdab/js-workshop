/*
# Fizz Buzz Game

Duration: ~1h

Prepare FizzBuzzGuesser which will return a specific FizzBuzz item.
Prepare FizzBuzzInferenceMachine which will return whole FizzBuzz sequence, separated by spaces. Sequence has to be constructed with following rules:

## Rules:

- for each number divisable or containing 3 say „Fizz"
- for each number divisable or containing 5 say „Buzz"
- for each number divisable or containing 3 and 5 say „FizzBuzz"
- in the other case say „$number"

## Steps:

- for 1 it should returns „1"
- for 2 it should return „2"
- for 3 it should return „Fizz"
- for 4 it should return „4"
- for 5 it should return „Buzz"
- for 6 it should return „Fizz"
- for 10 it should return „Buzz"
- for 13 it should return „Fizz"
- for 15 it should return „FizzBuzz"
- for 31 it should return „Fizz"
- for 51 it should return „FizzBuzz"
- for 52 it should return „Buzz"
- for 53 it should return „FizzBuzz"
*/

const assert = require('assert');
const FizzBuzz = require('../src/main');

describe('FizzBuzz', function() {

  it('is defined', function() {
    assert.equal(typeof FizzBuzz, 'function');
  });

  it('for 1 it should returns „1"', function() {
    assert.equal(FizzBuzz(1), '1');
  });

  it('for 3 it should return „Fizz"', function() {
    assert.equal(FizzBuzz(3), 'Fizz');
  });

  it('for 5 it should return „Buzz"', function() {
    assert.equal(FizzBuzz(5), 'Buzz');
  });

  it('for 6 it should return „Fizz"', function() {
    assert.equal(FizzBuzz(6), 'Fizz');
  });

  it('for 10 it should return „Buzz"', function() {
    assert.equal(FizzBuzz(10), 'Buzz');
  });

  it('for 13 it should return „Fizz"', function() {
    assert.equal(FizzBuzz(13), 'Fizz');
  });

  it('for 58 it should return „Buzz"', function() {
    assert.equal(FizzBuzz(58), 'Buzz');
  });
});
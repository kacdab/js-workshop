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

const createFizzBuzzGame = function (a, b) {
  return function(input) {
    if (input % a === 0) {
      return 'Fizz';
    }

    if (input % b === 0) {
      return 'Buzz';
    }

    if (input.toString().indexOf(a) !== -1) {
      return 'Fizz';
    }

    if (input.toString().indexOf(b) !== -1) {
      return 'Buzz';
    }

  return input;
  };
};

const FizzBuzz = createFizzBuzzGame(3, 5)

module.exports = FizzBuzz;

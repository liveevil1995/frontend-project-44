#!/usr/bin/env node

import userMessages from '../src/index.js';

const rulesOfGame = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  let max = Math.max(num1, num2);
  let min = Math.min(num1, num2);
  let result = min;

  while (max % result > 0) {
    result = max % result;
    max = min;
    min = result;
  }

  return String(result);
};

const gameRound = () => {
  const number1 = Math.floor(Math.random() * 100) + 1;
  const number2 = Math.floor(Math.random() * 100) + 1;
  const question = `${number1} ${number2}`;
  const correctAnswer = String(gcd(number1, number2));
  return [question, correctAnswer];
};

userMessages(rulesOfGame, gameRound);

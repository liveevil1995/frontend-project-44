#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { helloUser } from '../src/index.js';

const name = helloUser();

console.log('What is the result of the expression?');

const arrayAnswer = [];

const operatorsOfGame = ['+', '-', '*'];

const generatorOfOperator = (arr) => {
  const random = arr[Math.floor(Math.random() * arr.length)];
  return random;
};

const randomOperator = generatorOfOperator(operatorsOfGame);

for (let i = 0; i < 3; i += 1) {
  const number1 = Math.floor(Math.random() * 100) + 1;
  const number2 = Math.floor(Math.random() * 10) + 1;
  const convertateStrOperator = (str) => {
    if (str === '+') {
      return number1 + number2;
    } if (randomOperator === '-') {
      return number1 - number2;
    }
    return number1 * number2;
  };
  const calcResult = convertateStrOperator(randomOperator);
  const answer = readlineSync.question(`Question: ${number1} ${randomOperator} ${number2}\nYour answer: `);
  const numUnswer = Number(answer);

  const questionsTerms = (answer) => {
    if (numUnswer === calcResult) {
      console.log('Correct!');
      arrayAnswer.push('1');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${calcResult}'.\nLet's try again, ${name}!`);
      i = 3;
    }

    if (arrayAnswer.length === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  };

  questionsTerms(answer);
}

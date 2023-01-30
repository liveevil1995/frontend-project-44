#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const arrayAnswer = [];
const correctAnswer = ['yes', 'no'];

const isRemainder = (res) => res % 2 === 0;

for (let i = 0; i < 3; i += 1) {
  const questionNumber = Math.floor(Math.random() * 100);
  const question = readlineSync.question(`Question: ${questionNumber}\nYour answer: `);

  const questionsTerms = (answer, correct) => {
    if (answer === correct) {
      console.log('Correct!');
      arrayAnswer.push('1');
      if (arrayAnswer.length === 3) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`);
      i = 3;
    }
  };

  if (isRemainder(questionNumber)) {
    questionsTerms(question, correctAnswer[0]);
  } else {
    questionsTerms(question, correctAnswer[1]);
  }
}

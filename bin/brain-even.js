#!/usr/bin/env node

import userMessages from '../src/index.js';

const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const correctAnswers = ['yes', 'no'];
const [answ1, answ2] = correctAnswers;

const isRemainder = (res) => res % 2 === 0;

const resultValue = (num) => {
  if (isRemainder(num)) {
    return answ1;
  }
  return answ2;
};

const gameRound = () => {
  const questionNumber = Math.floor(Math.random() * 100) + 1;
  const question = `${questionNumber}`;
  const correctAnswer = resultValue(questionNumber);
  return [question, correctAnswer];
};

userMessages(rulesOfGame, gameRound);

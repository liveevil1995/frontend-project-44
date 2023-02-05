import runEngine from '../index.js';
import { getRandomInRange } from '../utils.js';

const rulesOfGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
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

const makeRound = () => {
  const number1 = getRandomInRange(1, 100);
  const number2 = getRandomInRange(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGcd(number1, number2));
  return [question, correctAnswer];
};

export default () => { runEngine(rulesOfGame, makeRound); };

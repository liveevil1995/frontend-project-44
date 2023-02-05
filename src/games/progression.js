import runEngine from '../index.js';
import { getRandomInRange } from '../utils.js';

const rulesOfGame = 'What number is missing in the progression?';

const createArithmeticProgression = (start, count, length) => {
  const arr = [];
  arr.push(start);
  for (let i = 0; i < length; i += 1) {
    const currentElem = arr[i] + count;
    arr.push(currentElem);
  }
  return arr;
};

const getRandomNumberFromProgression = (arr) => {
  const arrReplace = arr;
  const randomIndex = getRandomInRange(1, arr.length - 1);
  const randomIndexValue = arrReplace[randomIndex];
  arrReplace[randomIndex] = '..';
  return randomIndexValue;
};

const makeRound = () => {
  const randomStart = getRandomInRange(2, 4);
  const randomCount = getRandomInRange(2, 4);
  const randomLength = getRandomInRange(5, 10);
  createArithmeticProgression(randomStart, randomCount, randomLength);
  const progression = createArithmeticProgression(randomStart, randomCount, randomLength);
  const result = getRandomNumberFromProgression(progression);
  const question = progression.join(' ');
  const correctAnswer = String(result);
  return [question, correctAnswer];
};

export default () => { runEngine(rulesOfGame, makeRound); };

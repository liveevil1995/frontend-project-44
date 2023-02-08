import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

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

const makeRound = () => {
  const randomStart = getRandomInRange(2, 4);
  const randomCount = getRandomInRange(2, 4);
  const randomLength = getRandomInRange(5, 10);
  const progression = createArithmeticProgression(randomStart, randomCount, randomLength);
  const index = getRandomInRange(1, progression.length - 1);
  const correctAnswer = String(progression.splice(index, 1, '..'));
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => { runEngine(rulesOfGame, makeRound); };

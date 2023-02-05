import runEngine from '../index.js';
import { getRandomInRange, isPrime } from '../utils.js';

const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const makeRound = () => {
  const randomNumber = getRandomInRange(1, 100);
  const question = `${randomNumber}`;
  const correctAnswer = isPrime(randomNumber);
  return [question, correctAnswer];
};

export default () => { runEngine(rulesOfGame, makeRound); };

import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const makeRound = () => {
  const randomNumber = getRandomInRange(1, 100);
  const question = `${randomNumber}`;
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => { runEngine(rulesOfGame, makeRound); };

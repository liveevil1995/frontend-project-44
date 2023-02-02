import userMessages from '../index.js';

const prime = () => {
  const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getRandom = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  const isPrime = (num) => {
    if (num < 2) {
      return 'no';
    }

    if (num === 2) {
      return 'yes';
    }

    const limit = Math.sqrt(num);
    for (let i = 2; i <= limit; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }

    return 'yes';
  };

  const gameRound = () => {
    const randomNumber = getRandom(1, 100);
    const question = `${randomNumber}`;
    const correctAnswer = isPrime(randomNumber);
    return [question, correctAnswer];
  };

  userMessages(rulesOfGame, gameRound);
};

export default prime;

import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (res) => res % 2 === 0;

const makeRound = () => {
  const questionNumber = getRandomInRange(1, 100);
  const question = `${questionNumber}`;
  const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => { runEngine(rulesOfGame, makeRound); };

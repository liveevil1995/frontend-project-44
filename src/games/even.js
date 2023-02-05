import runEngine from '../index.js';
import { getRandomInRange, isRemainder } from '../utils.js';

const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const correctAnswers = ['yes', 'no'];
const [answ1, answ2] = correctAnswers;

const getResultValue = (num) => {
  if (isRemainder(num)) {
    return answ1;
  }
  return answ2;
};

const makeRound = () => {
  const questionNumber = getRandomInRange(1, 100);
  const question = `${questionNumber}`;
  const correctAnswer = getResultValue(questionNumber);
  return [question, correctAnswer];
};

export default () => { runEngine(rulesOfGame, makeRound); };

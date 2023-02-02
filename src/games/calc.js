import userMessages from '../index.js';

const calc = () => {
  const rulesOfGame = 'What is the result of the expression?';
  const operatorsForGame = ['*', '-', '+'];

  const randElement = (arr) => {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  };

  const calculationResult = (rand, num1, num2) => {
    if (rand === '*') {
      return num1 * num2;
    } if (rand === '-') {
      return num1 - num2;
    }
    return num1 + num2;
  };

  const gameRound = () => {
    const number1 = Math.floor(Math.random() * 100) + 1;
    const number2 = Math.floor(Math.random() * 100) + 1;
    const randOperator = randElement(operatorsForGame);
    const question = `${number1} ${randOperator} ${number2}`;
    const correctAnswer = String(calculationResult(randOperator, number1, number2));
    return [question, correctAnswer];
  };

  userMessages(rulesOfGame, gameRound);
};

export default calc;

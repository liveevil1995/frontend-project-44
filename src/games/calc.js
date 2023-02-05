import runEngine from '../index.js';
import { getRandomInRange } from '../utils.js';

const rulesOfGame = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInRange(0, operators.length)];
};

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Operator ${operator} - is incorrect!`);
  }
};

const makeRound = () => {
  const number1 = getRandomInRange(1, 10);
  const number2 = getRandomInRange(10, 50);
  const randOperator = getRandomOperator();
  const question = `${number1} ${randOperator} ${number2}`;
  const correctAnswer = String(calculation(number1, number2, randOperator));
  return [question, correctAnswer];
};

export default () => { runEngine(rulesOfGame, makeRound); };

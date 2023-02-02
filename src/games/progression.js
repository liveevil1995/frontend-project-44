import userMessages from '../index.js';

const progression = () => {
  const rulesOfGame = 'What number is missing in the progression?';

  const getRandom = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  const arithmeticProgression = (arr, start, length) => {
    const randomCount = getRandom(2, 4);
    let randomStart = start;
    for (let i = 1; i < length; i += 1) {
      const value = randomStart += randomCount;
      arr.push(value);
    }
  };

  const randomNumberFromProgression = (arr) => {
    const randomIndex = getRandom(1, arr.length - 1);
    const randomIndexValue = arr[randomIndex];
    arr[randomIndex] = '..';
    return randomIndexValue;
  };

  const gameRound = () => {
    const startNumber = getRandom(1, 3);
    const randomLength = getRandom(5, 10);
    const arrayProgression = [startNumber];
    arithmeticProgression(arrayProgression, startNumber, randomLength);
    const result = randomNumberFromProgression(arrayProgression);
    const question = `${arrayProgression}`;
    const correctAnswer = String(result);
    return [question, correctAnswer];
  };

  userMessages(rulesOfGame, gameRound);
};

export default progression;

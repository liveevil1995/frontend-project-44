export const getRandomInRange = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

export const getRandomOperator = () => {
    const operators = ['+', '-', '*'];
    return operators[getRandomInRange(0, operators.length - 1)] 
}

export const isRemainder = (res) => res % 2 === 0;

export const isPrime = (num) => {
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

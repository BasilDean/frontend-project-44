import { RANDOM_NUM_CEIL, RANDOM_NUM_FLOOR } from './constants.js';

const checkAnswer = (answer, name, correctAnswer) => {
  if (String(answer) === String(correctAnswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

const getRandomNum = (
  min = RANDOM_NUM_FLOOR,
  max = RANDOM_NUM_CEIL) => Math.floor(Math.random() * max + min);

const gcd = (n1, n2) => {
  if (n2 === 0) {
    return n1;
  }
  return gcd(n2, n1 % n2);
};

const makeProgression = (minElements = 5, maxElements = 10) => {
  const length = Math.floor(Math.random() * minElements + (maxElements - minElements));
  const firstElement = getRandomNum();
  const step = getRandomNum();
  const progression = [];
  progression[0] = firstElement;
  for (let i = 1; i < length; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  return progression;
};

const isPrime = (n) => {
  if (n <= 3) {
    return true;
  }
  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

export {
  checkAnswer,
  getRandomNum,
  gcd,
  makeProgression,
  isPrime,
};

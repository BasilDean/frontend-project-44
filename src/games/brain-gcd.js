import readlineSync from 'readline-sync';
import { checkAnswer, gcd, getRandomNum } from '../index.js';
import playGame from './play-game.js';

const askGcdQuestion = (name) => {
  const n1 = getRandomNum();
  const n2 = getRandomNum();
  console.log(`Question: ${n1} ${n2}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = gcd(n1, n2);
  return checkAnswer(answer, name, correctAnswer);
};

const playGcdGame = (name, taskDescription = 'Find the greatest common divisor of given numbers.') => playGame(name, askGcdQuestion, taskDescription);

export default playGcdGame;

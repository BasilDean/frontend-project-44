import readlineSync from 'readline-sync';
import { checkAnswer, getRandomNum, isPrime } from '../index.js';
import playGame from './play-game.js';

const askPrimeQuestion = (name) => {
  const n = getRandomNum();
  console.log(`Question: ${n}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isPrime(n) ? 'yes' : 'no';
  return checkAnswer(answer, name, correctAnswer);
};

const playPrimeGame = (name, taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".') => playGame(name, askPrimeQuestion, taskDescription);

export default playPrimeGame;

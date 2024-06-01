import readlineSync from 'readline-sync';
import { checkAnswer, getRandomNum } from '../index.js';
import playGame from './play-game.js';

const askEvenQuestion = (name) => {
  const n = getRandomNum();
  console.log(`Question: ${n}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = (n % 2 === 0) ? 'yes' : 'no';
  return checkAnswer(answer, name, correctAnswer);
};

const playEvenGame = (name, taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".') => playGame(name, askEvenQuestion, taskDescription);

export default playEvenGame;

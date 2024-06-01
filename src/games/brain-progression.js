import readlineSync from 'readline-sync';
import { checkAnswer, makeProgression } from '../index.js';
import playGame from './play-game.js';

const askProgressionQuestion = (name) => {
  const progression = makeProgression();
  const hiddenElement = Math.floor(Math.random() * progression.length);
  const correctAnswer = progression[hiddenElement];
  progression[hiddenElement] = '..';
  const question = progression.join(' ');
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return checkAnswer(answer, name, correctAnswer);
};

const playGcdGame = (name, taskDescription = 'What number is missing in the progression?') => playGame(name, askProgressionQuestion, taskDescription);

export default playGcdGame;

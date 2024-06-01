import readlineSync from 'readline-sync';
import {checkAnswer, getRandomNum, isPrime} from "../index.js";
import playGame from "./play-game.js";

const askPrimeQuestion = (name) => {
    const n = getRandomNum();
    console.log(`Question: ${n}`);
    let answer = readlineSync.question('Your answer: ');
    const correctAnswer = isPrime(n) ? 'yes' : 'no';
    return checkAnswer(answer, name, correctAnswer);
};

export const playPrimeGame = (name, rounds, taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".') => playGame(name, askPrimeQuestion, rounds, taskDescription);

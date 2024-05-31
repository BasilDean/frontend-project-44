import readlineSync from 'readline-sync';
import {checkAnswer, gcd, getRandomNum} from "../index.js";
import playGame from "./play-game.js";



const askGcdQuestion = (name) => {
    const n1 = getRandomNum() * getRandomNum();
    const n2 = getRandomNum() * getRandomNum();
    console.log(`Question: ${n1} ${n2}`);
    let answer = readlineSync.question('Your answer: ');
    const correctAnswer = gcd(n1, n2);
    return checkAnswer(answer, name, correctAnswer);
};

export const playGcdGame = (name, rounds, taskDescription = 'Find the greatest common divisor of given numbers.') => playGame(name, askGcdQuestion, rounds, taskDescription);

import readlineSync from 'readline-sync';
import {checkAnswer, makeProgression} from "../index.js";
import playGame from "./play-game.js";



const askProgressionQuestion = (name) => {
    const progression = makeProgression();
    const hiddenElement = Math.floor(Math.random() * progression.length);
    const correctAnswer = progression[hiddenElement];
    progression[hiddenElement] = '..';
    const question = progression.join(' ');
    console.log(`Question: ${question}`);
    let answer = readlineSync.question('Your answer: ');
    return checkAnswer(answer, name, correctAnswer);
};

export const playGcdGame = (name, rounds, taskDescription = 'What number is missing in the progression?') => playGame(name, askProgressionQuestion, rounds, taskDescription);

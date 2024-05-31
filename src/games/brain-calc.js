import readlineSync from "readline-sync";
import {checkAnswer, getRandomNum} from "../index.js";
import {OPERANDS} from "../constants.js";
import playGame from "./play-game.js";


const getOperand = () => OPERANDS[Math.floor(Math.random() * OPERANDS.length)];

const calculateAnswer = (operand, n1, n2) => {
    switch (operand) {
        case '+':
            return n1 + n2;
        case  '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        default:
            console.log(`Operand ${operand} is not allowed for this operation`);
            return null;
    }
};

const askCalcQuestion = (name) => {

    const n1 = getRandomNum();
    const n2 = getRandomNum();
    const operand = getOperand();
    console.log(`Question: ${n1} ${operand} ${n2}`);
    let answer = readlineSync.question('Your answer: ');
    const correctAnswer = calculateAnswer(operand, n1, n2);

    return checkAnswer(answer, name, correctAnswer);
};


export const playCalcGame = (name, rounds, taskDescription = 'What is the result of the expression?') => playGame(name, askCalcQuestion, rounds, taskDescription);

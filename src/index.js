import {RANDOM_NUM_CEIL, RANDOM_NUM_FLOOR} from "./constants.js";

const checkAnswer = (answer, name, correctAnswer) => {
    if (answer == correctAnswer) {
        console.log('Correct!');
        return true;
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        return false;
    }
};

const getRandomNum = () => Math.floor(Math.random() * RANDOM_NUM_CEIL + RANDOM_NUM_FLOOR);

export { checkAnswer, getRandomNum };

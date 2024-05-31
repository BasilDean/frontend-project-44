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

const gcd = (n1, n2) => {
    if (n2 === 0) {
        return n1;
    } else {
        return gcd(n2, n1 % n2);
    }
};

export { checkAnswer, getRandomNum, gcd };

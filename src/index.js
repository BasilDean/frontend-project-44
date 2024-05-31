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

const getRandomNum = (min = 1, max = 2) => Math.floor(Math.random() * RANDOM_NUM_CEIL + RANDOM_NUM_FLOOR);

const gcd = (n1, n2) => {
    if (n2 === 0) {
        return n1;
    } else {
        return gcd(n2, n1 % n2);
    }
};

const makeProgression = (minElements = 5, maxElements = 10) => {
    const length = Math.floor(Math.random() * minElements + (maxElements - minElements));
    const firstElement = getRandomNum();
    const step = getRandomNum();
    const progression = [];
    progression[0] = firstElement;
    for (let i = 1; i < length; i += 1) {
        progression[i] = progression[i - 1] + step;
    }
    return progression;
}

export { checkAnswer, getRandomNum, gcd, makeProgression };

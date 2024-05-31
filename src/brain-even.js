import readlineSync from 'readline-sync';
const RANDOM_NUM_CEIL = 10;
const RANDOM_NUM_FLOOR = 1;

const determineAndCheckAnswer = (n, answer, name) => {
    const correctAnswer = (n % 2 === 0) ? 'yes' : 'no';

    if (answer === correctAnswer) {
        console.log('Correct!');
        return true;
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        return false;
    }
};

const askIfEven = (name) => {
    const n = Math.floor(Math.random() * RANDOM_NUM_CEIL + RANDOM_NUM_FLOOR);
    console.log(`Question: ` + n);
    let answer = readlineSync.question('Your answer: ');

    return determineAndCheckAnswer(n, answer, name);
};

const playEvenGame = (name, rounds = 3) => {
    for (let i = 0; i < rounds; i += 1) {
        let isAnswerCorrect = askIfEven(name);
        if (!isAnswerCorrect) {
            break;
        }
        if (i === rounds - 1) {
            console.log(`Congratulations, ${name}!`);
        }
    }
};

export { playEvenGame };

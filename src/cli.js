import readlineSync from 'readline-sync';

const greeting = () => {
    "use strict";
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
};

export { greeting };

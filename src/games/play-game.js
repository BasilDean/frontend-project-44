const playGame = (name, askQuestion, rounds = 3, taskDescription = '') => {
    console.log(taskDescription)
    for (let i = 0; i < rounds; i += 1) {
        if (!askQuestion(name)) {
            break;
        }
        if (i === rounds - 1) {
            console.log(`Congratulations, ${name}!`);
        }
    }
};

export default playGame;

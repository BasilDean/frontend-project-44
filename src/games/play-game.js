import { NUMBER_OF_ROUNDS } from '../constants.js';

const playGame = (name, askQuestion, taskDescription = '', rounds = NUMBER_OF_ROUNDS) => {
  console.log(taskDescription);
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

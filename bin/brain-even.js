import {greeting} from "../src/cli.js";
import {playEvenGame} from "../src/brain-even.js";

const user = greeting();

playEvenGame(user);

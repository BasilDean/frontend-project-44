import {greeting} from "../src/cli.js";
import {playCalcGame} from "../src/games/brain-calc.js";

const user = greeting();

playCalcGame(user);

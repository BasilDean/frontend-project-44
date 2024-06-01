#!/usr/bin/env node
import {greeting} from "../src/cli.js";
import {playPrimeGame} from "../src/games/brain-prime.js";

const user = greeting();

playPrimeGame(user);

#!/usr/bin/env node
import {greeting} from "../src/cli.js";
import {playGcdGame} from "../src/games/brain-progression.js";

const user = greeting();

playGcdGame(user);

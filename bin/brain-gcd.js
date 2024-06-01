#!/usr/bin/env node
import greeting from '../src/cli.js';
import playGcdGame from '../src/games/brain-gcd.js';

const user = greeting();

playGcdGame(user);

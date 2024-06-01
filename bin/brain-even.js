#!/usr/bin/env node
import greeting from '../src/cli.js';
import playEvenGame from '../src/games/brain-even.js';

const user = greeting();

playEvenGame(user);

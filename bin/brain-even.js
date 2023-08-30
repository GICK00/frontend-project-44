#!/usr/bin/env node

import { greetUser } from "../src/index.js";
import game from '../bin/brain-games/main.js';

console.log('Welcome to the Brain Games!');
var name = greetUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
game(name, "parity");
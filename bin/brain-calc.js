#!/usr/bin/env node

import { greetUser } from '../src/index.js';
import game from '../src/main.js';

console.log('Welcome to the Brain Games!');
const name = greetUser();
console.log('What is the result of the expression?');
game(name, 'calc');

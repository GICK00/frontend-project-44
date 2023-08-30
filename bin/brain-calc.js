#!/usr/bin/env node

import  { greetUser } from "../src/index.js";
import game from '../bin/brain-games/main.js';

console.log('Welcome to the Brain Games!');
var name = greetUser();
console.log(`What is the result of the expression?`);
game(name, "calc");
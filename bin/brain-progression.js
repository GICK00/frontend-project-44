#!/usr/bin/env node

import  { greetUser } from "../src/index.js"
import game from '../src/main.js';

console.log('Welcome to the Brain Games!');
var name = greetUser();
console.log(`What number is missing in the progression?`);
game(name, "progression");
#!/usr/bin/env node

import  { greetUser } from "../src/index.js"
import calc from '../src/calc.js';

console.log('Welcome to the Brain Games!');
var name = greetUser();
console.log(`What is the result of the expression?`);
calc(name);
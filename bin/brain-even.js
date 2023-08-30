#!/usr/bin/env node

import greetAnswer from '../src/parity.js';
import index from "../src/index.js"

console.log('Welcome to the Brain Games!');
var name = index.greetUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
greetAnswer(name);
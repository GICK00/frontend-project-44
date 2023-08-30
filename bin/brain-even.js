#!/usr/bin/env node

import index from "../src/index.js"
import parity from '../src/parity.js';

console.log('Welcome to the Brain Games!');
var name = index.greetUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
parity(name);
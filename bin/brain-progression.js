#!/usr/bin/env node

import  { greetUser } from "../src/index.js"
import progression from '../src/progression.js';

console.log('Welcome to the Brain Games!');
var name = greetUser();
console.log(`Find the greatest common divisor of given numbers.`);
progression(name);
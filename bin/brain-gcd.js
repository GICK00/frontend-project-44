#!/usr/bin/env node

import  { greetUser } from "../src/index.js"
import gcd from '../bin/brain-games/gcd.js';

console.log('Welcome to the Brain Games!');
var name = greetUser();
console.log(`Find the greatest common divisor of given numbers.`);
gcd(name);
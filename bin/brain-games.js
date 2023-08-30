#!/usr/bin/env node

import greetUser from '../src/cli.js';
import even from '../bin/brain-even.js';

console.log('Welcome to the Brain Games!');
var name = greetUser();
even(name);
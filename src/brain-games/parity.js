import readlineSync from 'readline-sync';
import { getRandomInt } from '../index.js';

function check(number) {
  if (number % 2 === 0) return 'yes';
  return 'no';
}

export default function parity() {
  const randomNumber = getRandomInt(1, 100);
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  return [answer, check(randomNumber)];
}

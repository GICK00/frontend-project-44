import readlineSync from 'readline-sync';
import { getRandomInt } from '../index.js';

function gcdNum(a, b) {
  if (b === 0) { return a; }
  return gcdNum(b, a % b);
}

export default function gcd() {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  console.log(`Question: ${num1} ${num2}`);
  let answer = readlineSync.question('Your answer: ');
  answer = parseInt(answer, 10);
  const correctAnswer = gcdNum(num1, num2);

  return [answer, correctAnswer];
}

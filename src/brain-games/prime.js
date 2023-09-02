import readlineSync from 'readline-sync';
import { getRandomInt } from '../index.js';

function isPrime(number) {
  if (number <= 1) { return false; }

  for (let i = 2; i <= Math.sqrt(number); i += 1) { if (number % i === 0) return false; }
  return true;
}

export default function prime() {
  const number = getRandomInt(1, 100);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [answer, correctAnswer];
}

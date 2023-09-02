import readlineSync from 'readline-sync';
import { getRandomInt } from '../index.js';

export default function calc() {
  const randomNumber1 = getRandomInt(1, 100);
  const randomNumber2 = getRandomInt(1, 100);
  const sign = getRandomInt(0, 2);
  let exampleText;
  let example;

  switch (sign) {
    case 0:
      exampleText = `${randomNumber1} + ${randomNumber2}`;
      example = randomNumber1 + randomNumber2;
      break;

    case 1:
      exampleText = `${randomNumber1} - ${randomNumber2}`;
      example = randomNumber1 - randomNumber2;
      break;

    case 2:
      exampleText = `${randomNumber1} * ${randomNumber2}`;
      example = randomNumber1 * randomNumber2;
      break;

    default:
      break;
  }
  console.log(`Question: ${exampleText}`);
  const answer = readlineSync.question('Your answer: ');
  return [answer, example];
}

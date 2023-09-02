import calc from './brain-games/calc.js';
import parity from './brain-games/parity.js';
import gcd from './brain-games/gcd.js';
import prime from './brain-games/prime.js';
import progression from './brain-games/progression.js';

export default function main(name, type) {
  let i = 0; let
    result = 0;
  let mas;
  while (i < 3) {
    i += 1;
    mas = [];
    switch (type) {
      case 'calc': mas = calc();
        break;
      case 'gcd': mas = gcd();
        break;
      case 'parity': mas = parity();
        break;
      case 'prime': mas = prime();
        break;
      case 'progression': mas = progression();
        break;
      default:
        break;
    }

    if (mas[0] === mas[1]) {
      console.log('Correct!');
      result += 1;
    } else {
      console.log(`'${mas[0]}' is wrong answer ;(. Correct answer was '${mas[1]}'.\r\nLet's try again, ${name}!`);
      return;
    }
  }
  if (result === 3) { console.log(`Congratulations, ${name}!`); }
}

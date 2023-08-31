import readlineSync from 'readline-sync';
import { getRandomInt } from "../../src/index.js";

export default function parity() {       
    var randomNumber = getRandomInt(1, 100);
    console.log(`Question: ${randomNumber}`)
    const answer = readlineSync.question('Your answer: ');
    return [answer, check(randomNumber)];         
}

function check(number) {
    if (number % 2 === 0)
        return 'yes';
    else
        return 'no';
}
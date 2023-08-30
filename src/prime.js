import readlineSync from 'readline-sync';
import { getRandomInt } from "../src/index.js";

export default function prime(name) 
{         
        const number = getRandomInt(1, 100);
        console.log(`Question: ${number}`);
        const answer = readlineSync.question('Your answer: ');
        let correctAnswer = isPrime(number) ? 'yes' : 'no';
    
        return [answer, correctAnswer];
}

function isPrime(number) 
{
    if (number <= 1)
        return false;

    for (let i = 2; i <= Math.sqrt(number); i++) 
        if (number % i === 0)
            return false;

    return true;
}
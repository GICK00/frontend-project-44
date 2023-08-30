import readlineSync from 'readline-sync';
import { getRandomInt } from "../src/index.js";

export default function gcd() 
{
        var num1 = getRandomInt(1, 100);
        var num2 = getRandomInt(1, 100);
        console.log(`Question: ${num1} ${num2}`);
        const answer = parseInt(readlineSync.question('Your answer: '));
        var correctAnswer = gcdNum(num1, num2);
        
        return [answer, correctAnswer];  
}

function gcdNum(a, b) 
{
    if (b === 0) 
        return a;
    return gcdNum(b, a % b);
}
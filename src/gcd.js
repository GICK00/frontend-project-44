import readlineSync from 'readline-sync';
import { getRandomInt } from "../src/index.js";

export default function gcd(name) 
{
    let i = 0;
    let result = 0;
    while(3 > i)
    {
        i++;           
        var num1 = getRandomInt(1, 100);
        var num2 = getRandomInt(1, 100);
        console.log(`Question: ${num1} ${num2}`);
        const answer = parseInt(readlineSync.question('Your answer: '));
        var correctAnswer = gcdNum(num1, num2);
        
        if (answer === correctAnswer)
        {
            console.log(`Correct!`);
            result++;
        }
        else
        {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'..\r\nLet's try again, ${name}!`);
            return;
        }
    }
    if(result === 3)
        console.log(`Congratulations, ${name}`);  
}

function gcdNum(a, b) 
{
    if (b === 0) 
        return a;
    return gcdNum(b, a % b);
}
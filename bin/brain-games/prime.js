import readlineSync from 'readline-sync';
import { getRandomInt } from "../src/index.js";

export default function prime(name) 
{
    let i = 0;
    let result = 0;
    while(3 > i)
    {
        i++;           
        const number = getRandomInt(1, 100);
        console.log(`Question: ${number}`);
        const answer = readlineSync.question('Your answer: ');
        
        let correctAnswer = isPrime(number) ? 'yes' : 'no';
    
        if (answer === correctAnswer)
        {
            console.log(`Correct!`);
            result++;
        }
        else
        {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\r\nLet's try again, ${name}!`);
            return;
        }
    }
    if(result === 3)
        console.log(`Congratulations, ${name}`);  
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
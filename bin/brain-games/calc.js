import readlineSync from 'readline-sync';
import { getRandomInt } from "../src/index.js";

export default function calc(name) 
{
    let i = 0;
    let result = 0;
    while(3 > i)
    {
        i++;           
        var randomNumber1 = getRandomInt(1, 100);
        var randomNumber2 = getRandomInt(1, 100);
        var sign = getRandomInt(0, 2);
        var exampleText;
        let example;
        
        switch(sign)
        {
            case 0: 
            {
                exampleText = `${randomNumber1} + ${randomNumber2}`;
                example = randomNumber1 + randomNumber2;
                break;
            }
            case 1: 
            {
                exampleText = `${randomNumber1} - ${randomNumber2}`;
                example = randomNumber1 - randomNumber2;
                break;
            }
            case 2: 
            {
                exampleText = `${randomNumber1} * ${randomNumber2}`;
                example = randomNumber1 * randomNumber2;
                break;
            }
        }

        console.log(`Question: ${exampleText}`)
        const answer = parseInt(readlineSync.question('Your answer: '));
  
            if (answer === example)
            {
                console.log(`Correct!`);
                result++;
            }
            else
            {
                console.log(`'${answer}' is wrong answer ;(. Correct answer was '${example}'..\r\nLet's try again, ${name}!`);
                return;
            }
    }
    if(result === 3)
        console.log(`Congratulations, ${name}`);
}
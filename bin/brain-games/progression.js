import readlineSync from 'readline-sync';
import { getRandomInt } from "../src/index.js";

export default function progression(name) 
{
    let i = 0;
    let result = 0;
    while(3 > i)
    {
        i++;           
        const progression = generateProgression(getRandomInt(5, 10));
        const hiddenProgression = hideNumber(progression);
        console.log(`Question: ${hiddenProgression.join(' ')}`);
        const answer = parseInt(readlineSync.question('Your answer: '));
        
        let correctAnswer = progression[hiddenProgression.indexOf('..')];
    
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

function generateProgression(length) 
{
    const progression = [];
    const start = getRandomInt(1, 10);
    const diff = getRandomInt(1, 5);

    for (let i = 0; i < length; i++)
        progression.push(start + i * diff);
    return progression;
}

function hideNumber(progression) 
{
    const hiddenIndex = getRandomInt(0, progression.length - 1);
    const hiddenProgression = [...progression];
    hiddenProgression[hiddenIndex] = '..';
    
    return hiddenProgression;
  }
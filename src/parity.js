import readlineSync from 'readline-sync';

export default function greetAnswer(name) 
{
    let i = 0;
    let result = 0;
    while(3 > i)
    {
        i++;           
        var randomNumber = getRandomInt(1, 100);
        console.log(`Question: ${randomNumber}`)
        const answer = readlineSync.question('Your answer: ');
        if (randomNumber % 2 === 0) 
        {    
            if ("yes" === answer.toLowerCase())
            {
                console.log(`Correct!`);
                result++;
            }
            else
            {
                console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\r\nLet's try again, ${name}!`);
                return;
            }
        }
        else
        {
            if ("no" === answer.toLowerCase())
            {
                console.log(`Correct!`);
                result++;
            }
            else
            {
                console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\r\nLet's try again, ${name}`);
                return;
            }
        }
    }
    if(result === 3)
        console.log(`Congratulations, ${name}`);
}

function getRandomInt(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
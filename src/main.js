import calc from "../src/brain-games/calc.js";
import parity from "../src/brain-games/parity.js";
import gcd from "../src/brain-games/gcd.js";
import prime from "../src/brain-games/prime.js";
import progression from "../src/brain-games/progression.js";

export default function main(name, type) {
    let i = 0, result = 0;
    while(3 > i) {
        i++;  
        var mas = [];      
        switch(type) {
            case "calc": mas = calc();
                break;
            case "gcd": mas = gcd();
                break;
            case "parity": mas = parity();
                break;
            case "prime": mas = prime();
                break;
            case "progression": mas = progression();
                break;
        }

        if (mas[0] === mas[1]) {
            console.log(`Correct!`);
            result++;
        }
        else {
            console.log(`'${mas[0]}' is wrong answer ;(. Correct answer was '${mas[1]}'.\r\nLet's try again, ${name}!`);
            return;
        }
    }
    if(result === 3)
        console.log(`Congratulations, ${name}`);
}
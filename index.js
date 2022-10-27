let displayText = document.getElementById("display-text");
let currentNum = 0;
let expression = [];

const numBttns = document.querySelectorAll('td[class=num-bttn]');
const opBttns = document.querySelectorAll('td[class=op-bttn]');

numBttns
.forEach( bttn =>

    bttn.addEventListener("click", () => {
        console.log('number clicked');
        expression.push(bttn.textContent);
        displayText.textContent = expression.join('');
        
    })
        
);

opBttns
.forEach( bttn =>

    bttn.addEventListener("click", () => {
        
        switch(bttn.textContent){
            case "÷":
                console.log('÷');
                break;
            case "×":
                console.log('×');
                break;
            case "-":
                console.log('-');
                break;
            case "+":
                console.log('+');
                break;
            case "=":
                console.log('-');
                break;

            case "AC":
                console.log("AC");
                break;
            case "+/-":
                console.log("+/-");
                break;
            case "%":
                console.log("%");
                break;
            default:
                console.log('operation');
                break;
        }
    })

        
);

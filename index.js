let displayText = document.getElementById("display-text");
let expression = [];

const numBttns = document.querySelectorAll('td[class=num-bttn]');
const opBttns = document.querySelectorAll('td[class=op-bttn]');

numBttns
.forEach( bttn =>

    bttn.addEventListener("click", () => {
        console.log('number clicked');
        //expression.push(bttn.textContent);
        //displayText.textContent = expression.join('');
        if(displayText.textContent === "0"){
            displayText.textContent = bttn.textContent;
        }
        else{
            displayText.textContent = displayText.textContent + "" + bttn.textContent;
        }
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
                currentNum = 0;
                expression = [];
                displayText.textContent = currentNum;
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

let displayText = document.getElementById("display-text");
let operatorPressed = false;
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
        else if(displayText.textContent.includes('.')){
            //displayText.textContent = displayText.textContent;
            displayText.textContent = displayText.textContent + "" + bttn.textContent.replace(".", "")
        }
        else if(operatorPressed){
            operatorPressed = false;
            displayText.textContent = bttn.textContent
        }
        else{
            displayText.textContent = displayText.textContent + "" + bttn.textContent;
        }
    })
        
);

opBttns
.forEach( bttn =>

    bttn.addEventListener("click", () => {
        
        operatorPressed = true;

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
                expression = [];
                displayText.textContent = "0";
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

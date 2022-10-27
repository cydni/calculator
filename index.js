let displayText = document.getElementById("display-text");
let operatorPressed = false;
let expression = [];

const numBttns = document.querySelectorAll('td[class=num-bttn]');
const opBttns = document.querySelectorAll('td[class=op-bttn]');

numBttns
.forEach( bttn =>

    bttn.addEventListener("click", () => {
        console.log('number clicked');
        if(displayText.textContent === "0"){
            displayText.textContent = bttn.textContent;
        }
        else if(displayText.textContent.includes('.')){
            displayText.textContent = displayText.textContent + "" + bttn.textContent.replace(".", "");
        }
        else if(operatorPressed){
            operatorPressed = false;
            displayText.textContent = bttn.textContent;
        }
        else{
            displayText.textContent = displayText.textContent + "" + bttn.textContent;
        }
    })
        
);

opBttns
.forEach( bttn => {

    bttn.addEventListener("click", () => {
        
        operatorPressed = true;
        //turn ac into c here
        switch(bttn.textContent){
            /*case "÷":
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
                break;*/
            case "=":
                console.log('=');
                expression.push(displayText.textContent);
                displayText.textContent = eval(expression.join(""));
                expression = [];
                break;
            case "AC":
                console.log("AC");
                operatorPressed = false;
                displayText.textContent = "0";
                expression = [];
                break;
            case "+/-":
                console.log("+/-");
                displayText.textContent = parseFloat(displayText.textContent) * (-1);
                break;
            case "%":
                console.log("%");
                displayText.textContent = parseFloat(displayText.textContent) / 100;
                break;
            default:
                console.log('operation');
                let last_item = expression[expression.length-1];
                if(["+", "-", "×", "÷"].includes(last_item) && operatorPressed){
                    expression.pop();
                    expression.push(bttn.textContent);
                }
                else{
                    expression.push(displayText.textContent);
                    expression.push(bttn.textContent);
                }
                
                operatorPressed = true;
                break;
        }
    })  
});

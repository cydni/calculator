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
            console.log('case 1');
        }
        else if(displayText.textContent.includes('.')){
            displayText.textContent = displayText.textContent + "" + bttn.textContent.replace(".", "");
            console.log('case 2');
        }
        else if(operatorPressed){
            operatorPressed = false;
            displayText.textContent = bttn.textContent;
            console.log('case 3');
        }
        else{
            displayText.textContent = displayText.textContent + "" + bttn.textContent;
            console.log('case 4');
        }
    })
        
);

opBttns
.forEach( bttn =>

    bttn.addEventListener("click", () => {
        
        operatorPressed = true;
        //turn ac into c here
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
                operatorPressed = false;
                console.log("AC");
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

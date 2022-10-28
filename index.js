let displayText = document.getElementById("display-text");
let operatorPressed = false;
let expression = [];

const numBttns = document.querySelectorAll('td[class=num-bttn]');
const opBttns = document.querySelectorAll('td[class=op-bttn]');

//operands
numBttns
.forEach( bttn =>

    bttn.addEventListener("click", () => {
        //console.log('number clicked');

        if(document.getElementsByClassName("active").length > 0){
            document.getElementsByClassName("active")[0].className = document.getElementsByClassName("active")[0].className.replace(" active", "");
        }

        if(displayText.textContent === "0"){
            displayText.textContent = bttn.textContent;
            console.log('case 1');
        }
        else if(operatorPressed){
            operatorPressed = false;
            displayText.textContent = bttn.textContent;
            console.log('case 2');
        }
        else if(displayText.textContent.includes('.')){
            displayText.textContent = displayText.textContent + "" + bttn.textContent.replace(".", "");
            console.log('case 3');
        }
        else{
            displayText.textContent = displayText.textContent + "" + bttn.textContent;
            console.log('case 4');
        }
    })
        
);

//operators
opBttns
.forEach( bttn => {

    bttn.addEventListener("click", () => {
        
        operatorPressed = true;

        if(document.getElementsByClassName("active").length > 0){
            document.getElementsByClassName("active")[0].className = document.getElementsByClassName("active")[0].className.replace(" active", "");
        }

        bttn.classList.add("active");

        //turn ac into c here
        switch(bttn.textContent){
            case "=":
                expression.push(displayText.textContent);
                displayText.textContent = eval(expression.join(""));
                expression = [];
                break;
            case "AC":
                operatorPressed = false;
                displayText.textContent = "0";
                expression = [];
                break;
            case "+/-":
                displayText.textContent = parseFloat(displayText.textContent) * (-1);
                break;
            case "%":
                displayText.textContent = parseFloat(displayText.textContent) / 100;
                break;
            default:
                let last_item = expression[expression.length-1];
                if(["+", "-", "*", "/"].includes(last_item) && operatorPressed){
                    expression.pop();
                    expression.push(bttn.getAttribute('data-value'));
                }
                else{
                    expression.push(displayText.textContent);
                    expression.push(bttn.getAttribute('data-value'));
                    console.log(expression);
                }
                
                operatorPressed = true;
                break;
        }
    })  
});

//TO DO:
//issue with 0?
//understand calculator a bit better
//what should happen when you press inverse after pressing an operator -> show -0
//add overflow to display
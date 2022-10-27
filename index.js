let displayText = document.getElementById("display-text");
let currentNum = 0;
let expression = [];

const numBttns = document.querySelectorAll('td[class=num-bttn]');
const opBttns = document.querySelectorAll('td[class=op-bttn]');

numBttns
.forEach( bttn =>

    bttn.addEventListener("click", () => {
        console.log('clicked');
        displayText.textContent = bttn.textContent;
    })
        
);

opBttns
.forEach( bttn =>

    bttn.addEventListener("click", () => {
        console.log('operation');
    })
        
);

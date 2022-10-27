//let displayText = document.getElementById("display-text");

const numBttns = document.querySelectorAll('td[class=num-bttn]');

numBttns
.forEach( bttn =>

    bttn.addEventListener("click", () => {
        console.log('clicked');
        document.getElementById("display-text").textContent = bttn.textContent;
    })
        
);


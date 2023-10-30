const engineeringTypes = ["CIVIL", "MECHANICAL", "CHEMICAL", "AEROSPACE", "ELECTRICAL", "MOTORSPORT"];

let typeIndex = 1;
let currentTitleText = document.getElementById("replace-text-effect");



function ChangeText() {
    currentTitleText.textContent = engineeringTypes[typeIndex];

    setTimeout(flyTop, 200);

}

function flyTop() {
    console.log("ran");

    currentTitleText.style.transform = 'translate(0%,-100px)';

    setTimeout(flyBottom,1000);

}

function flyBottom() {

    if (typeIndex != typeIndex.length){
        typeIndex++;
    }
    else {
        typeIndex = 0;
    }

    currentTitleText.textContent = engineeringTypes[typeIndex];
    currentTitleText.style.transform = 'translate(0%, 0px)';

    setTimeout(flyTop,3000);
    

}

ChangeText();
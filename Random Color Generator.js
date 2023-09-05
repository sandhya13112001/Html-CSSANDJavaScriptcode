let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

let buttonElement = document.getElementById("button");
let bgContainerElement = document.getElementById("bgContainer");

bgContainerElement.style.backgroundColor = bgColorsArray[0];

function onChangeBgColor() {
    let numberOfBgColor = bgColorsArray.length;
    console.log(numberOfBgColor);
    let randomColorIndex = Math.ceil(Math.random() * numberOfBgColor);
    console.log(randomColorIndex)
    if(randomColorIndex === numberOfBgColor){
        randomColorIndex = numberOfBgColor - 1;
    }
    let randomBgColor = bgColorsArray[randomColorIndex];

    bgContainerElement.style.backgroundColor = randomBgColor;
}
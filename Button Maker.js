let bgColorInputE1 = document.getElementById("bgColorInput");
let fontColorInputE1 = document.getElementById("fontColorInput");
let fontSizeInputE1 = document.getElementById("fontSizeInput");
let fontWeightInputE1 = document.getElementById("fontWeightInput");
let paddingInputE1 = document.getElementById("paddingInput");
let borderRadiusInputE1 = document.getElementById("borderRadiusInput");
let customButtonE1 = document.getElementById("customButton");

function onApplyProperties() {
    let bgColorValue = bgColorInputE1.value;
    let fontColorValue = fontColorInputE1.value;
    let fontSizeValue = fontSizeInputE1.value;
    let fontWeightValue = fontWeightInputE1.value;
    let paddingValue = paddingInputE1.value;
    let borderRadiusValue = borderRadiusInputE1.value;

    customButtonE1.style.backgroundColor = bgColorValue;
    customButtonE1.style.color = fontColorValue;
    customButtonE1.style.fontSize = fontSizeValue;
    customButtonE1.style.fontWeight = fontWeightValue;
    customButtonE1.style.padding = paddingValue;
    customButtonE1.style.borderRadius = borderRadiusValue;
}
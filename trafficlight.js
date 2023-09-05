let stoplightelement = document.getElementById("stopLight");
let startlightelement = document.getElementById("readyLight");
let golightelement = document.getElementById("goLight");
let startbuttonelement = document.getElementById("stopButton");
let yellowbuttonelement = document.getElementById("readyButton");
let redbuttonelement = document.getElementById("goButton");

function stopStyle() {
    stoplightelement.style.backgroundColor = "#cf1124"
    startlightelement.style.backgroundColor = "#4b5069"
    golightelement.style.backgroundColor = "#4b5069"
    startbuttonelement.style.backgroundColor = "#cf1124"
    yellowbuttonelement.style.backgroundColor = "#1f1d41"
    redbuttonelement.style.backgroundColor = "#1f1d41"

}

function readyStyle() {
    stoplightelement.style.backgroundColor = "#4b5069"
    startlightelement.style.backgroundColor = "#f7c948"
    golightelement.style.backgroundColor = "#4b5069"
    startbuttonelement.style.backgroundColor = "#1f1d41"
    yellowbuttonelement.style.backgroundColor = "#f7c948"
    redbuttonelement.style.backgroundColor = "#1f1d41"

}

function goStyle() {
    stoplightelement.style.backgroundColor = "#4b5069"
    startlightelement.style.backgroundColor = "#4b5069"
    golightelement.style.backgroundColor = "#199473"
    startbuttonelement.style.backgroundColor = "#1f1d41"
    yellowbuttonelement.style.backgroundColor = "#1f1d41"
    redbuttonelement.style.backgroundColor = "#199473"

}
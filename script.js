var bg;
var fg;

function changeColor(){
    document.querySelector("body").style.backgroundColor = bg;
    document.querySelector("h1").style.color = fg;
}

function saveBG(){
    bg = document.querySelector(".color").value;
}

function saveFG(){
    fg = document.querySelector(".color").value;
}
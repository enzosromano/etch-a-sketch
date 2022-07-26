const container = document.querySelector('#canvas');
const stuff = document.getElementsByClassName("content");
const slider = document.getElementById("slider");
var colorSetting = "gray";

initializeGridLayout(slider.value, colorSetting);

function initializeGridLayout(gridSize, colorSetting) {

    document.documentElement.style.setProperty('--gridSize', gridSize);

    var i = 0;

    while(i < gridSize * gridSize){
        const content = document.createElement('div')
        content.classList.add('content');
        container.appendChild(content);
    
        content.addEventListener('mousemove', function(event) {
            if(event.buttons == 1) {
             event.preventDefault();
           
             content.style.backgroundColor = colorFunctionality(colorSetting);
           
            }
           });
    
        content.addEventListener('mousedown', function(event) {
    
             content.style.backgroundColor = colorFunctionality(colorSetting);
           
           });
    
           
        i++;
    }

}

function colorFunctionality(colorMode){

    console.log(colorMode);

    if(colorMode == "gray"){
        return "gray";
    }
    else if(colorMode == "black"){
        return "black";
    }
    else{
        var colors = ['red', 'green', 'blue', 'orange', 'yellow'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

document.getElementById('clearDrawing').addEventListener("click", function(){

    for (var i = 0; i < stuff.length; i++) {
        stuff[i].style.backgroundColor = "white";
    }

})

document.getElementById('standardMode').addEventListener("click", function(){

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    initializeGridLayout(slider.value, "gray");

})

document.getElementById('blackMode').addEventListener("click", function(){

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    initializeGridLayout(slider.value, "black");

})

document.getElementById('colorMode').addEventListener("click", function(){

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    initializeGridLayout(slider.value, "rainbow");

})

slider.addEventListener("input", function(){

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    initializeGridLayout(slider.value);

})

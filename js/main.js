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

    if(colorMode == "rainbow"){
        var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    else{
        return colorMode;
    }

}

function colorIn(myBox, colorMode){

    if(colorMode == "rainbow"){
        var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        myBox.style.backgroundColor = (colors[Math.floor(Math.random() * colors.length)]);
    }
    else if(colorMode == "gray"){
        myBox.style.backgroundColor = "gray";
    }
    else if(colorMode == "black"){
        myBox.style.backgroundColor = "black";
    }
    else{
        myBox.style.backgroundColor = "white";
    }
}

function changeColor(colorMode){

    for (let i = 0; i < stuff.length; i++) {

        stuff[i].removeEventListener;

        stuff[i].addEventListener('mousedown', function(event) {
            colorIn(stuff[i], colorMode);
        });

        stuff[i].addEventListener('mousemove', function(event) {

            if(event.buttons == 1) {
                event.preventDefault();
              
                colorIn(stuff[i], colorMode);;
              
               }

        });
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
    changeColor("gray");
})

document.getElementById('blackMode').addEventListener("click", function(){
    changeColor("black");
})

document.getElementById('colorMode').addEventListener("click", function(){
    changeColor("rainbow");
})

document.getElementById('eraserMode').addEventListener("click", function(){
    changeColor("white");
})

slider.addEventListener("input", function(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    initializeGridLayout(slider.value);
})

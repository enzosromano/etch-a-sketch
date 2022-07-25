const container = document.querySelector('#canvas');
const stuff = document.getElementsByClassName("content");
const slider = document.getElementById("slider");

initializeGridLayout(slider.value);

function initializeGridLayout(gridSize) {

    document.documentElement.style.setProperty('--gridSize', gridSize);

    var i = 0;

    while(i < gridSize * gridSize){
        const content = document.createElement('div')
        content.classList.add('content');
        container.appendChild(content);
    
        content.addEventListener('mousemove', function(event) {
            if(event.buttons == 1) {
             event.preventDefault();
           
             content.style.backgroundColor = "pink";
           
            }
           });
    
        content.addEventListener('mousedown', function(event) {
    
             content.style.backgroundColor = "pink";
           
           });
    
           
        i++;
    }

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

document.getElementById('clearDrawing').addEventListener("click", function(){

    for (var i = 0; i < stuff.length; i++) {
        stuff[i].style.backgroundColor = "bisque";
    }

})

slider.addEventListener("input", function(){

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    initializeGridLayout(slider.value);

})

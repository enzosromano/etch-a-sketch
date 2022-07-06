const container = document.querySelector('#container');
const stuff = document.getElementsByClassName("content");

var i = 0;

while(i < 25){
    const content = document.createElement('div')
    content.classList.add('content');
    /*content.textContent = 'Box: ' + i;*/
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

document.getElementById('clearDrawing').addEventListener("click", function(){

    for (var i = 0; i < stuff.length; i++) {
        stuff[i].style.backgroundColor = "bisque";
    }

})

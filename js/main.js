const container = document.querySelector('#container');

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

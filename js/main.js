const container = document.querySelector('#container');

var i = 0;

while(i < 9){
    const content = document.createElement('button')
    content.classList.add('content');
    content.textContent = 'Box: ' + i;
    container.appendChild(content);
    content.onclick = function makeBlack() {
        content.style.backgroundColor = "black";
        container.style.color = "pink";
    }
    i++;
}
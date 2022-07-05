const container = document.querySelector('#container');

var i = 0;

while(i < 9){
    const content = document.createElement('div')
    content.classList.add('content' + i);
    content.textContent = 'Box: ' + i;
    container.appendChild(content);
    i++;
}

/*const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);*/
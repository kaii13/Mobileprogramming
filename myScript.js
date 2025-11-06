function changeFontSize() {
    const box = document.querySelector('.box1');
    box.style.fontSize = '24px';
}

function changeStyle() {
    const box = document.querySelector('.box3');
    box.style.fontStyle = 'italic';
}

function changeImage() {
    const box = document.querySelector('.box5');
    box.style.backgroundImage = 'url(tiger.jpg)';
    box.style.backgroundSize = 'cover';
}

function addText() {
    const box = document.querySelector('.box7');
    box.textContent = 'New Text!';
}
let box = document.querySelector('.boxes');

for (let i = 0; i< 500; i++) {
    let miniBox = document.createElement('div');
    miniBox.className = "mini-box";
    miniBox.textContent = `${Math.round(Math.random()*500)}`    
    box.append(miniBox);
}
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    return `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`
}

function handler() {
    let miniBox = document.querySelectorAll('.mini-box')
    miniBox.forEach((element) => {
        element.textContent = `${Math.round(Math.random()*500)}`
        element.style.backgroundColor = getRandomColor();
    });   
}

box.addEventListener('mousemove', handler);
const buttons = document.querySelectorAll('.color-btn');

function changeColor() {
    // 'this' refers to the specific button clicked
    this.style.backgroundColor = 'yellow';
}

buttons.forEach(btn => {
    btn.addEventListener('click', changeColor);
});
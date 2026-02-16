const swatches = document.querySelectorAll('.swatch');

function applySwatchColor() {
    // this.dataset.color pulls the value from data-color="..."
    const selectedColor = this.dataset.color;
    this.style.backgroundColor = selectedColor;
}

swatches.forEach(swatch => {
    swatch.addEventListener('click', applySwatchColor);
});
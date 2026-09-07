// Initialize image position
let imageX = 0;
let imageY = 0;
const moveDistance = 10; // pixels to move per click

// Get the image element
const image = document.getElementById('movableImage');

// Function to update image position
function updateImagePosition() {
    if (image) {
        image.style.left = imageX + 'px';
        image.style.top = imageY + 'px';
    }
}

// Function to move image left
function moveLeft() {
    imageX -= moveDistance;
    updateImagePosition();
    console.log('Moved left. Position:', imageX, imageY);
}

// Function to move image right
function moveRight() {
    imageX += moveDistance;
    updateImagePosition();
    console.log('Moved right. Position:', imageX, imageY);
}

// Function to move image up
function moveUp() {
    imageY -= moveDistance;
    updateImagePosition();
    console.log('Moved up. Position:', imageX, imageY);
}

// Function to move image down
function moveDown() {
    imageY += moveDistance;
    updateImagePosition();
    console.log('Moved down. Position:', imageX, imageY);
}

// Function to reset image to center
function resetPosition() {
    imageX = 0;
    imageY = 0;
    updateImagePosition();
    console.log('Position reset to center');
}

// Add keyboard support for arrow keys
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowLeft':
            moveLeft();
            break;
        case 'ArrowRight':
            moveRight();
            break;
        case 'ArrowUp':
            moveUp();
            break;
        case 'ArrowDown':
            moveDown();
            break;
    }
});

// Button event listeners (if buttons are present in HTML)
document.addEventListener('DOMContentLoaded', function() {
    const leftBtn = document.getElementById('leftBtn');
    const rightBtn = document.getElementById('rightBtn');
    const upBtn = document.getElementById('upBtn');
    const downBtn = document.getElementById('downBtn');
    const resetBtn = document.getElementById('resetBtn');

    if (leftBtn) leftBtn.addEventListener('click', moveLeft);
    if (rightBtn) rightBtn.addEventListener('click', moveRight);
    if (upBtn) upBtn.addEventListener('click', moveUp);
    if (downBtn) downBtn.addEventListener('click', moveDown);
    if (resetBtn) resetBtn.addEventListener('click', resetPosition);

    // Initialize image position on load
    updateImagePosition();
});

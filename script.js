// Set up canvas for dynamic structure
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

// Set background GIF
canvas.style.backgroundImage = 'url("Background.gif")';
canvas.style.backgroundSize = 'cover';
canvas.style.backgroundPosition = 'center center'; // Adjust this for positioning

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Update canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // drawDynamicStructure(); // If you have additional dynamic elements, you can add this function back
});

// Initialize dynamic structure
// drawDynamicStructure();

function showPopup() {
    var popupImage = document.getElementById('popupImage');
    popupImage.style.visibility = 'visible';
}

function hidePopup() {
    var popupImage = document.getElementById('popupImage');
    popupImage.style.visibility = 'hidden';
}

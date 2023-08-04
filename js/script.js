// Varivales
let headerBackgrounds = document.querySelectorAll(".bgrnd");
let imgIndex = 0;

// Functional Image Slideshow
function changeBackground() {
    // Remove showing class from current background.
    headerBackgrounds[imgIndex].classList.remove("showing");

    // Increase value by 1
    imgIndex++;

    // Reset imgIndex to 0 if it exceeds the length of headerBackgrounds
    if (imgIndex >= headerBackgrounds.length) {
        imgIndex = 0;
    }

    // Add .showing to the next background
    headerBackgrounds[imgIndex].classList.add("showing");
}

setInterval(changeBackground, 5000)


// For btn hover and bg change
const hoverButton = document.getElementById('hoverButton');
const targetDiv = document.getElementById('targetDiv');
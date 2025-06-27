const images = [
    "./Images/WhatsApp Image 2025-02-24 at 11.18.49 AM.jpeg",
    "./Images/WhatsApp Image 2025-02-24 at 5.15.27 PM.jpeg",
    "./Images/WhatsApp Image 2025-02-24 at 6.03.11 PM.jpeg",
    "./Images/WhatsApp Image 2025-02-24 at 3.36.06 PM.jpeg"
];

let index = 0;
let isPlaying = true;
let interval = setInterval(changeImage, 4000);

function changeImage() {
    index = (index + 1) % images.length;
    updateSlideshow();
}

function jumpToImage(i) {
    index = i;
    updateSlideshow();
    resetInterval(); // Restart autoplay when manually selecting
}

function updateSlideshow() {
    document.getElementById("slideshow").src = images[index];

    // Update active bubble
    document.querySelectorAll(".bubble").forEach((bubble, i) => {
        bubble.classList.toggle("opacity-100", i === index);
        bubble.classList.toggle("opacity-50", i !== index);
    });
}

function togglePlayPause() {
    if (isPlaying) {
        clearInterval(interval);
        document.getElementById("pausePlayBtn").textContent = "Play";
    } else {
        interval = setInterval(changeImage, 4000);
        document.getElementById("pausePlayBtn").textContent = "Pause";
    }
    isPlaying = !isPlaying;
}

function resetInterval() {
    clearInterval(interval);
    if (isPlaying) {
        interval = setInterval(changeImage, 4000);
    }
}

updateSlideshow();



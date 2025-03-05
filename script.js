let audio;

window.onload = function() {
    audio = new Audio('Daur_hidup.mp3'); // Ganti dengan URL audio Anda
};

function toggleCard() {
    const cardTitle = document.getElementById("card-title");
    const cardText = document.getElementById("card-text");
    const cardImage = document.getElementById("card-image");
    
    if (cardTitle.innerText === "Card Title 1") {
        cardTitle.innerText = "Card 2";
        cardText.innerText = "hallo 1.";
        cardImage.src = "images/peach-cat-goma.gif"; // Change to GIF
    } else {
        cardTitle.innerText = "halo";
        cardText.innerText = "This is the first card description.";
        cardImage.src = "images/peach-cat-goma.gif"; // Default GIF
    }
}

function playAudio() {
    audio.play().catch(error => console.log("Audio playback was blocked: ", error));
}

const messageElement = document.getElementById("message");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const imgElement = document.getElementById("togepi-gif");

// The 6 messages for the No button
const messages = [
    "Are you sure?",
    "Are you really sure?",
    "Pookie Please?",
    "Even Melody is sad!",
    "Please say yes!",
    "Last chance to say yes!"
];

let messageIndex = 0;
let yesScale = 1; 

// Safety check to ensure we are on the main page before adding listeners
if (noBtn) {
    noBtn.addEventListener("click", handleNoClick);
}

function handleNoClick() {
    if (messageIndex >= messages.length) {
        window.location.href = "no-choice.html"; 
        return;
    }

    noBtn.innerText = messages[messageIndex];

    const sadGifs = [
        "assets/images/togepi-sad-1.gif",
        "assets/images/togepi-sad-2.gif",
        "assets/images/melody-sad-2.gif", 
        "assets/images/melody-sad-3.gif"
    ];

    if (sadGifs.length > 0) {
        imgElement.src = sadGifs[messageIndex % sadGifs.length];
    }

    yesScale += 0.3; 
    yesBtn.style.transform = `scale(${yesScale})`;

    messageIndex++;
}

/* --- RAINBOW FLOATING HEARTS (Runs on every page) --- */
const heartEmojis = ["❤️", "🧡", "💛", "💚", "💙", "💜", "🤍", "🩷", "🩵", "🤎"];

function startHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        
        // Pick a random color
        const randomEmoji = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.innerHTML = randomEmoji;
        
        // Random Position & Speed
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 4 + "s"; // 4s to 7s speed
        heart.style.fontSize = Math.random() * 20 + 20 + "px"; // 20px to 40px size
        
        document.body.appendChild(heart);

        // Remove after animation to prevent lag
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }, 300); // New heart every 300ms
}

// Start hearts as soon as the page loads
document.addEventListener("DOMContentLoaded", startHearts);
const messageElement = document.getElementById("message");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const imgElement = document.getElementById("togepi-gif");

// The 6 messages
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

noBtn.addEventListener("click", handleNoClick);

function handleNoClick() {
    if (messageIndex >= messages.length) {
        window.location.href = "no-choice.html"; 
        return;
    }

    noBtn.innerText = messages[messageIndex];

    // Updated with the correct filenames from your assets
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
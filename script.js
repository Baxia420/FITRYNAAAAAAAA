const messageElement = document.getElementById("message");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const imgElement = document.getElementById("togepi-gif");

// The 6 messages
const messages = [
    "Are you sure?",
    "Are you really sure?",
    "Pookie Please?",
    "Please say yes!",
    "Even Melody is sad!",
    "Last chance to say yes!"
];

let messageIndex = 0;
let yesScale = 1; 

noBtn.addEventListener("click", handleNoClick);

function handleNoClick() {
    // CHECK: If we have run out of messages, redirect to the no-choice page
    if (messageIndex >= messages.length) {
        window.location.href = "no-choice.html"; 
        return;
    }

    // 1. Change the text on the "No" button
    noBtn.innerText = messages[messageIndex];

    // 2. Change the GIF to a sad one
    // Ensure these files exist in your assets folder!
    const sadGifs = [
        "assets/images/togepi-sad-1.gif",
        "assets/images/togepi-sad-2.gif",
        "assets/images/melody-sad-1.gif", 
        "assets/images/melody-sad-2.gif"
    ];

    // Use the % operator here just to cycle through GIFs if you have fewer GIFs than messages
    if (sadGifs.length > 0) {
        imgElement.src = sadGifs[messageIndex % sadGifs.length];
    }

    // 3. Make the "Yes" button GROW bigger
    yesScale += 0.3; 
    yesBtn.style.transform = `scale(${yesScale})`;

    // 4. Increment the counter for next time
    messageIndex++;
}
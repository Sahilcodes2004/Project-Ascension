// Project Ascension - Dashboard UI Logic
// Motto: Discipline Over Motivation

console.log("System Online: app.js initialized for v0.2 interactions.");

// 1. Grab the button and the new log container
const startBtn = document.getElementById('start-session-btn');
const logContainer = document.getElementById('training-log');

// 2. State variable
let isSessionActive = false;

// 3. The Toggle & Log Interaction
startBtn.addEventListener('click', function() {
    
    // Capture the exact current time
    const currentTime = new Date().toLocaleTimeString();
    
    // Create a new paragraph element for the log
    const logEntry = document.createElement('p');

    if (isSessionActive === false) {
        // TURN ON
        startBtn.textContent = "Session Active // Lock In";
        startBtn.style.backgroundColor = "#22c55e"; 
        isSessionActive = true; 
        
        // Setup the Start Log entry
        logEntry.textContent = `[${currentTime}] - Training Session Initiated.`;
        logEntry.style.color = "#22c55e"; // Green text for start
        
    } else {
        // TURN OFF
        startBtn.textContent = "Start Training Session";
        startBtn.style.backgroundColor = "#dc2626"; 
        isSessionActive = false; 
        
        // Setup the Complete Log entry
        logEntry.textContent = `[${currentTime}] - Session Complete. Discipline Over Motivation.`;
        logEntry.style.color = "#94a3b8"; // Muted text for completion
    }
    
    // Add the new text to the very top of your log container
    logContainer.prepend(logEntry);
    
});
// --- WIPE LOGS PROTOCOL ---
const clearBtn = document.getElementById('clear-log-btn');

clearBtn.addEventListener('click', function() {
    // Setting innerHTML to an empty string instantly deletes all child elements
    logContainer.innerHTML = ''; 
    console.log("System logs successfully wiped.");
});
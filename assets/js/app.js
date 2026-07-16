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
// --- MODULE 3: NUTRITION ENGINE ---
const calculateBudgetBtn = document.getElementById('calculate-budget-btn');
const budgetDisplay = document.getElementById('budget-display');
// Check memory for a saved budget on page load
const savedBudget = localStorage.getItem('ascension_budget');
if (savedBudget !== null) {
    budgetDisplay.textContent = `Daily Budget: ₹${savedBudget}`;
    // Keep it red if you were over budget
    if (Number(savedBudget) < 0) {
        budgetDisplay.style.color = "#dc2626"; 
    }
}


calculateBudgetBtn.addEventListener('click', function() {
    // 1. Set the daily hostel budget
    let dailyBudget = 60;
    
    // 2. Grab the numbers from all 4 cost inputs. 
    // We use Number() to ensure JS treats it as math, not text.
    const cost1 = Number(document.getElementById('meal-1-cost').value);
    const cost2 = Number(document.getElementById('meal-2-cost').value);
    const cost3 = Number(document.getElementById('meal-3-cost').value);
    const cost4 = Number(document.getElementById('meal-4-cost').value);
    
    // 3. Calculate total spent
    const totalSpent = cost1 + cost2 + cost3 + cost4;
    
    // 4. Calculate remaining budget
    const remainingBudget = dailyBudget - totalSpent;
    
    // 5. Update the UI directly in the DOM
    budgetDisplay.textContent = `Daily Budget: ₹${remainingBudget}`;
    
    // 6. Visual feedback: Turn text red if you go over budget!
    if (remainingBudget < 0) {
        budgetDisplay.style.color = "#dc2626"; 
    } else {
        budgetDisplay.style.color = "#22c55e"; 
    }
    // Save to browser memory
    localStorage.setItem('ascension_budget', remainingBudget);
    
    console.log(`Meals logged. Total spent: ₹${totalSpent}. Remaining: ₹${remainingBudget}`);
});
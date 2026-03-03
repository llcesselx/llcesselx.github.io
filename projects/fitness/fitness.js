// fitness.js

// Universal back/home functions
function goBack() { window.history.back(); }
function goHome() { window.location.href = "../../index.html"; }

// Dynamic Loader for Classics (DT, Cindy, Linda, etc)
function loadClassic(name) {
    window.location.href = `projects/fitness/wotd/wods/${name}.html`;
}

// Dynamic Loader for HWPO
function loadHWPO(type) {
    // Assuming these are in the 'hwpo' folder
    // 'flagship' becomes 'hwpoflagship.html'
    const fileName = type === 'flagship' ? 'hwpoflagship' : `hwpo${type}`;
    window.location.href = `hwpo/workouts/${fileName}.html`;
}

// Keeping your special PDF link
function getSwolePDF() {
    window.open("guides/getswole.pdf", "_blank");
}

// Save a score (e.g., saveScore('cindy', '20 Rounds'))
function saveScore(workoutName) {
    const scoreInput = document.getElementById("userInput").value;
    if (!scoreInput) return alert("Please enter a score!");

    localStorage.setItem(`${workoutName}_score`, scoreInput);

    // Update the display immediately
    const display = document.getElementById("prevScore");
    if (display) display.innerText = scoreInput;

    alert(`Score for ${workoutName} saved!`);
}

// Load a score (Call this in the body onload or at the end of the page)
function loadScore(workoutName) {
    const saved = localStorage.getItem(`${workoutName}_score`);
    const display = document.getElementById("prevScore");

    if (saved && display) {
        display.innerText = saved;
    } else if (display) {
        display.innerText = "No score recorded yet.";
    }
}
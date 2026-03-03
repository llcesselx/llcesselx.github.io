// fitness.js

// Universal back/home functions
function goBack() { window.history.back(); }
function goHome() { window.location.href = "../../index.html"; }

// Dynamic Loader for Classics (DT, Cindy, Linda, etc)
function loadClassic(name) {
    // Assuming these are in the 'wotd' folder
    window.location.href = `wotd/${name}.html`;
}

// Dynamic Loader for HWPO
function loadHWPO(type) {
    // Assuming these are in the 'hwpo' folder
    // 'flagship' becomes 'hwpoflagship.html'
    const fileName = type === 'flagship' ? 'hwpoflagship' : `hwpo${type}`;
    window.location.href = `hwpo/${fileName}.html`;
}

// Keeping your special PDF link
function getSwolePDF() {
    window.open("guides/getswole.pdf", "_blank");
}
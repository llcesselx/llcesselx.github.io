// fitness.js

// 1. Step Back: Goes to the previous page in browser history
function goBack() {
    window.history.back();
}

// 2. Home: Sends user to the main portfolio index
function goHome() {
    // This assumes your fitness folder is two levels deep
    // from your main index.html
    window.location.href = "../../index.html";
}

// 3. Program Loaders (Centralized)
function loadGetSwole() { window.location.href = "getswole/getswole.html"; }
function loadGetSwoleDiet() { window.location.href = "getswole/getswole-diet.html"; }
function getSwolePDF() { window.open("guides/getswole.pdf", "_blank"); }
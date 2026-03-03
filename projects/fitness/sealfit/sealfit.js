function goBack() {
    // ../ moves up to 'week1'
    // ../../ moves up to 'workouts'
    // ../../../ moves up to 'sealfit' where sealfit.html lives
    window.location.href = "../../sealfit.html";
}

// Dynamic Loader for SealFit Workouts
function loadWorkout(week, day) {
    // Navigates from sealfit.html into the subfolders
    // Example: workouts/week1/wk1monday.html
    window.location.href = `workouts/week${week}/wk${week}${day}.html`;
}

function gotoHome() {
    // Moves up one level to the main fitness hub
    window.location.href = '../fitness.html';
}
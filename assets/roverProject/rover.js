/* --- GLOBAL UTILITIES --- */
function goBack() {
    window.history.back();
}

/* --- ISU ROVER 3D GALLERY LOGIC --- */
const roverModels = [
    {
        file: "assets/rover_full.glb",
        name: "Rescue Rover Assembly",
        title: "System Integration",
        desc: "Full structural assembly featuring the Arduino Uno R4 WiFi control node and isolated motor driver bays."
    },
    {
        file: "assets/mount.glb",
        name: "Sensor Sub-Assembly",
        title: "Custom Component Mounts",
        desc: "3D-printed brackets designed for the ultrasonic sensor array, optimized for field durability."
    }
];

let roverIdx = 0;

function changeRoverModel(step) {
    const viewer = document.getElementById('mainViewer');
    const nameDisp = document.getElementById('partName');
    const titleDisp = document.getElementById('captionTitle');
    const textDisp = document.getElementById('captionText');

    // If elements don't exist (i.e., we're on a different page), exit function
    if (!viewer) return;

    roverIdx = (roverIdx + step + roverModels.length) % roverModels.length;

    // Apply the updates
    viewer.src = roverModels[roverIdx].file;
    nameDisp.innerText = roverModels[roverIdx].name;
    titleDisp.innerText = roverModels[roverIdx].title;
    textDisp.innerText = roverModels[roverIdx].desc;
}

/* --- FITNESS TRACKER LOGIC --- */
// You can move your addReps() and nextRound() functions here too!
function kittyClick() {
    let img = document.getElementById("imgChange");
    // Check if the current source contains 'placecats'
    if (img.src.includes("placecats.com")) {
        img.src = "https://place-puppy.com/400x400";
    } else {
        img.src = "https://placecats.com/400/400";
    }
}

function linkedIn() {
    window.location.href = "https://www.linkedin.com/in/lea-tice";
}

function gitHub() {
    window.location.href = "https://www.github.com/llcesselx";
}

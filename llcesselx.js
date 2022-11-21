function kittyClick() {
    let existingImg = document.getElementById("imgChange");
    let newKittyImg = 'src="https://placekitty.com/250/250"';
    let newPuppyImg = 'src="https://place-puppy.com/250x250"';
    if (existingImage.src === "https://placekitty.com/250/250") {
        existingImage.src = newPuppyImg;
    }
    else {
        existingImg.src = "https://place-puppy.com/250x250";
    }
    return existingImg;
}
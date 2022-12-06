function kittyClick() {
    console.log("Image clicked...")

    let existingImg = document.getElementById("imgChange");
    let newKittyImg = "https://placekitty.com/250/250";
    let newPuppyImg = "https://place-puppy.com/250x250";

    if (existingImg.src === "https://placekitty.com/250/250") {
        existingImg.src = newPuppyImg;
    }
    else {
        existingImg.src = newKittyImg;
    }
}
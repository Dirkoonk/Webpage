function navigateTo(page) {
    window.location.href = page;
}

function showInfo(color) {
    const infoDisplay = document.getElementById("info-display");
    const infoImage = document.getElementById("info-image");
    const infoTitle = document.getElementById("info-title");
    const infoText = document.getElementById("info-text");

    if (color === "yellow") {
        infoImage.src = "study.jpg";
        infoTitle.innerText = "Don't know what to study";
        infoText.innerText = "'Don't know what to study' is our first Album and represents all the struggle that teenagers have when growing up. We tried to put all of those emotions in this ablum.";
    } else if (color === "purple") {
        infoImage.src = "job.jpg";
        infoTitle.innerText = "Looking for a Job";
        infoText.innerText = "Finishing University might be great at first, but with great power comes great responsibility. Where do I use all this knowledge that I have now? We don't know, but thats what our second album is about. ";
    }

    infoDisplay.style.display = "block"; // Info-Box sichtbar machen
}
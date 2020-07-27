let vidSpeed = prompt('What video speed would you like? (type "half" for half speed, "1" for regular speed, or "2" for double speed)')
if (vidSpeed === "half") {
    vidSpeed = 0.5
} 

document.querySelector('video').playbackRate = vidSpeed;
document.querySelector('video').play();
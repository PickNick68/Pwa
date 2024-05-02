// This is a JavaScript module that is loaded on demand. It can export any number of
// functions, and may import other JavaScript modules if required.

export function showPrompt(message) {
    return prompt(message, 'Type anything here');
}

export function playSound() {
    document.getElementById("myAudio").loop = false;
    document.getElementById("myAudio").play();
    console.info("myAudio");
}

export function stopSound() {
    document.getElementById("myAudio").pause();
    document.getElementById("myAudio").currentTime = 0;
}

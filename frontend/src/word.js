const newGuess = document.getElementById("guess-a-letter")




function appendGuessPlatform(round) {
    debugger
    const guessDiv = document.getElementById("guess-platforms")
    removeAllChildNodes(guessDiv)
    for (i=0; i < round.word.name.length; i++) {
        const u = document.createElement("u")
        u.innerText = "*"
        guessDiv.append(u)
    }


}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}
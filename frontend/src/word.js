const newGuess = document.getElementById("guess-a-letter")
const guessDiv = document.getElementById("guess-platforms")
const wrongGuessDiv = document.getElementById("incorrect-guesses")


function appendGuessPlatform(round) {
    removeAllChildNodes(guessDiv)
    for (i=0; i < round.word.name.length; i++) {
        const u = document.createElement("u")
        u.innerText = "*"
        guessDiv.append(u)
    }
    const li = document.createElement("li")
    li.id = "incorrect-guesses-text"
    li.innerText = "Incorrect Guesses: (5 chances) "
    wrongGuessDiv.append(li)
    appendCounter()
    
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function fetchLetters(e) {
    const userInput = e.target.children[1].value
    let test
    e.preventDefault()
    fetch("http://localhost:3000/words")
    .then(r => r.json())
    .then(wordName)
    .then(w => letterIncluded(w, userInput))
    
}

function wordName(word) {
    return word.name 
}

function letterIncluded(word, input) {
    if (word.includes(input)) {
        let indicies = []
        splitWord = word.split("")
        for (const index of splitWord) {
            (index == input) ? indicies.push(input) : indicies.push(0)
        } 
        replaceBlanks(indicies)
    } else {
        increaseWrongGuess()
    }
}

function replaceBlanks(indicies) {
    const currentLetters = filterGuessChildNodes(guessDiv)
    removeAllChildNodes(guessDiv)
    // let children = guessDiv.children
    for (let x=0; x < indicies.length; x++) {
        if ((indicies[x] != 0) && (currentLetters[x] == '*')) {
            const u = document.createElement("u")
            u.innerText = indicies[x]
            guessDiv.append(u)
        } else if (currentLetters[x] == '*') {
            const u = document.createElement("u")
            u.innerText = "*"
            guessDiv.append(u)
        } else {
            const u = document.createElement("u")
            u.innerText = currentLetters[x]
            guessDiv.append(u)

        }
    }
}

function filterGuessChildNodes(parent) {
    let children = parent.children
    let arr = []
    for (let i=0; i < parent.childElementCount; i++) {
        arr.push(children[i].innerText)
    }
    return arr
}

function increaseWrongGuess() {
    const counter = document.getElementById("counter")
    let x = parseInt(counter.innerText) + 1 
    appendCounter(x)
}

function appendCounter(num = 0) {
    const li = document.getElementById("incorrect-guesses-text")
    removeAllChildNodes(li)
    const ul = document.createElement("ul")
    ul.id = "counter"
    ul.innerText = num
    wrongGuessDiv.firstElementChild.append(ul)
}
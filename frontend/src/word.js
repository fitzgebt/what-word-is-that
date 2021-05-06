const newGuess = document.getElementById("guess-a-letter")
const guessDiv = document.getElementById("guess-platforms")
const wrongGuessDiv = document.getElementById("incorrect-guesses")
const wrongLetters = document.getElementById("previously-guessed-letters")
const counter = document.getElementById("counter")


function appendGuessPlatform(round) {
    checkIfWin()
    if (roundWin == false) {

        removeAllChildNodes(guessDiv)
        for (i=0; i < round.word.name.length; i++) {
            const u = document.createElement("u")
            u.innerText = "*"
            guessDiv.append(u)
        }
        // const li = document.createElement("li")
        // li.id = "incorrect-guesses-text"
        // li.innerText = "Incorrect Guesses: (8 chances) "
        // wrongGuessDiv.append(li)
        appendCounter()
    } else {
        roundOver()
    }
    
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function removeAllChildElements(parent) {
    while (parent.children.length > 0) {
        parent.removeChild(parent.firstElementChild)
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
    appendLetters(userInput)
}

function wordName(word) {
    return word.name 
}

function letterIncluded(word, input) {
    const counter = document.getElementById("counter")
    if (parseInt(counter.innerText) < 8) {
        if (word.includes(input)) {
            let indicies = []
            splitWord = word.split("")
            for (const index of splitWord) {
                (index == input) ? indicies.push(input) : indicies.push(0)
            } 
            replaceBlanks(indicies, input)
        } else {
            increaseWrongGuess(word)
        }
    } else {
        // too many guesses time for new game
        // revealWord(word, gameOver)
    }
}

function replaceBlanks(indicies, letter) {
    const currentLetters = filterGuessChildNodes(guessDiv)
    removeAllChildNodes(guessDiv)
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
    checkIfWin()
}

function filterGuessChildNodes(parent) {
    let children = parent.children
    let arr = []
    for (let i=0; i < parent.childElementCount; i++) {
        arr.push(children[i].innerText)
    }
    return arr
}

function increaseWrongGuess(word) {
    const counter = document.getElementById("counter")
    let x = parseInt(counter.innerText) + 1 
    if (x == 8) {
        const gameOver = true
        // newGuess.style.display = 'none'
        newGuess.hidden = true
        debugger
        revealWord(word, gameOver)
        appendCounter(x)
    } else {
        appendCounter(x)
    }
}

function appendCounter(num = 0) {
    const li = document.getElementById("incorrect-guesses-text")
    if (li.children.length) {
        removeAllChildElements(li)
    }
    const ul = document.createElement("ul")
    ul.id = "counter"
    ul.innerText = num
    wrongGuessDiv.firstElementChild.append(ul)
}

function appendLetters(letter) {
    const li = document.createElement("li")
    li.innerText = letter
    wrongLetters.append(li)
}

function revealWord(word, gameOver) {
    if (gameOver == true) {
        roundWin = false
        removeAllChildNodes(guessDiv)
        for (let i=0; i < word.length; i++) {
            splitWord = word.split("")
            const u = document.createElement("u")
            u.innerText = splitWord[i]
            guessDiv.append(u)
        }
        roundOver(word)
    }

}

function checkIfWin() {
    if (guessDiv.children.length > 0) {

        let win = true
        const currentLetters = filterGuessChildNodes(guessDiv)
        for (let i=0; i < currentLetters.length; i++) {
            if (currentLetters[i] == '*') {
                win = false
            }
        }
        if (win === true) {
            roundWin = true
            newGuess.hidden = true
            roundOver()
        }
    }
}
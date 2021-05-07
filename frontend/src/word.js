const newGuess = document.getElementById("guess-a-letter")
const guessDiv = document.getElementById("guess-platforms")
const wrongGuessDiv = document.getElementById("incorrect-guesses")
const wrongLetters = document.getElementById("previously-guessed-letters")
const counter = document.getElementById("counter")
let letterBank = []



class Word {

    static appendGuessPlatform(round) {  
        Word.checkIfWin()
        if (roundWin == false) {
            for (let i=0; i < round.word.name.length; i++) {
                const u = document.createElement("u")
                u.innerText = "*"
                guessDiv.append(u)
            }
            Word.appendCounter()
        } else {
            Round.roundOver()
        }
    }

    static wordIncludesLetter(e) {
        e.preventDefault()
        const userInput = e.target.children[1].value
        if (letterBank.includes(userInput)) {
            alert("You already chose that letter - try a new one.")
        } else {
            letterBank.push(userInput)
                if (currentRound.children[0].word.name.includes(userInput)) {
                    let indicies = []
                    const splitWord = currentRound.children[0].word.name.split("")
                    for (const index of splitWord) {
                        (index == userInput) ? indicies.push(userInput) : indicies.push(0)
                    }
                    Word.replaceBlanks(indicies) 
                } else {
                    
                    Word.increaseWrongGuess()
                    Word.appendLetters(userInput)
                }
        }
        e.target.reset()
    }
        
    static replaceBlanks(indicies) {
        const currentLetters = Word.filterGuessChildNodes(guessDiv)
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
        Word.checkIfWin()
    }
    
    static filterGuessChildNodes(parent) {
        let children = parent.children
        let arr = []
        for (let i=0; i < parent.childElementCount; i++) {
            arr.push(children[i].innerText)
        }
        return arr
    }
    
    static increaseWrongGuess() {
        const counter = document.getElementById("counter")
        let x = parseInt(counter.innerText) + 1 
        if (x == 8) {
            const gameOver = true
            newGuess.hidden = true
            Word.appendCounter(x)
            Word.revealWord(gameOver)
        } else {
            Word.appendCounter(x)
        }
    }
    
    static appendCounter(num = 0) {
        const li = document.getElementById("incorrect-guesses-text")
        if (li.children.length) {
            removeAllChildElements(li)
        }
        const ul = document.createElement("ul")
        ul.id = "counter"
        ul.innerText = num
        wrongGuessDiv.firstElementChild.append(ul)
    }
    
    static appendLetters(letter) {
        const li = document.createElement("ul")  // <== testing on DOM elements
        li.innerText = letter
        li.class = "list-group-item"
        wrongLetters.append(li)
    }
    
    static revealWord(gameOver) {
        let word = currentRound.children[0].word.name
        if (gameOver == true) {
            roundWin = false
            removeAllChildNodes(guessDiv)
            for (let i=0; i < word.length; i++) {
                let splitWord = word.split("")
                const u = document.createElement("u")
                u.innerText = splitWord[i]
                guessDiv.append(u)
            }
            Round.roundOver()
        }
    }
    
    static checkIfWin() {
        if (guessDiv.children.length > 0) {
            let win = true
            const currentLetters = Word.filterGuessChildNodes(guessDiv)
            for (let i=0; i < currentLetters.length; i++) {
                if (currentLetters[i] == '*') {
                    win = false
                }
            }
            if (win === true) {
                roundWin = true
                newGuess.hidden = true
                Round.roundOver()
            }
        }
    }

}







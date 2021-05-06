const newGuess = document.getElementById("guess-a-letter")
const guessDiv = document.getElementById("guess-platforms")
const wrongGuessDiv = document.getElementById("incorrect-guesses")
const wrongLetters = document.getElementById("previously-guessed-letters")
const counter = document.getElementById("counter")
let letterBank = []



class Word {

    constructor(word) {
        this.id = word.id
        this.name = word.name

    }

    static appendGuessPlatform(round) {
        debugger
        Word.checkIfWin()
        if (roundWin == false) {
            // removeAllChildNodes(guessDiv)
            for (let i=0; i < round.word.name.length; i++) {
                const u = document.createElement("u")
                u.innerText = "*"
                guessDiv.append(u)
            }
            Word.appendCounter()
        } else {
            roundOver()
        }
        
    }

    static wordIncludesLetter(e) {
        e.preventDefault()
        const userInput = e.target.children[1].value
        if (letterBank.includes(userInput)) {
            alert("You already chose that letter - try a new one.")
        } else {
            debugger
            letterBank.push(userInput)
            if (parseInt(counter.innerText) < 8) {
                if (currentRound.children[0].word.name.includes(userInput)) {
                    let indicies = []
                    const splitWord = currentRound.children[0].word.name.split("")
                    for (const index of splitWord) {
                        (index == userInput) ? indicies.push(userInput) : indicies.push(0)
                    }
                    Word.replaceBlanks(indicies, userInput) 
                } else {
                    debugger
                    Word.increaseWrongGuess()
                    Word.appendLetters(userInput)
                }
            }
        }
    }

    // static fetchLetters(e) {
    //     e.preventDefault()
    //     const userInput = e.target.children[1].value
    //     if (letterBank.includes(userInput)) {
    //         alert("You already chose that letter - try a new one.")
    //     } else {
    //         fetch("http://localhost:3000/words")
    //         .then(r => r.json())
    //         .then(wordName)
    //         .then(w => letterIncluded(w, userInput))
    //         appendLetters(userInput)
    //     }
    // }

    // letterIncluded(word, input) {
    //     const counter = document.getElementById("counter")
    //         letterBank.push(input)
    //         if (parseInt(counter.innerText) < 8) {
    //             if (word.includes(input)) {
    //                 let indicies = []
    //                 const splitWord = word.split("")
    //                 for (const index of splitWord) {
    //                     (index == input) ? indicies.push(input) : indicies.push(0)
    //                 } 
    //                 replaceBlanks(indicies, input)
    //             } else {
    //                 increaseWrongGuess(word)
    //             }
    //         }
    // }
        
    static replaceBlanks(indicies, letter) {
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
        debugger
        const counter = document.getElementById("counter")
        let x = parseInt(counter.innerText) + 1 
        if (x == 8) {
            const gameOver = true
            newGuess.hidden = true
            revealWord(word, gameOver)
            Word.appendCounter(x)
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
        const li = document.createElement("li")
        li.innerText = letter
        wrongLetters.append(li)
    }
    
    revealWord(word, gameOver) {
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
                roundOver()
            }
        }
    }




}







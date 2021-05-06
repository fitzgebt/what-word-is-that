const newGame = document.getElementById("form-new-game")
let roundWin = false
const roundDiv = document.getElementById("pastRounds")
currentRound = document.getElementById("current-round")

class Round {

    constructor(round) {
        this.id = round.id
        this.win = round.win
        this.complete = round.complete
        this.guesses = round.guesses
        this.word = round.word
    }

    appendRound(){
        const li = document.createElement("li")
        let wl
        (this.win) ? wl = "WIN" : wl = "LOSS" 
        li.id = this.id
        li.win = this.win
        li.complete = this.complete
        li.gueeses = this.guesses
        li.word = this.word
        if (this.complete === false) {
            li.innerText = `Round ${this.id} - In Progress...`
            currentRound.append(li)
            Word.appendGuessPlatform(li)
        } else {
            li.innerText = `Round ${this.id} - ${this.word.name} - ${this.guesses} Incorrect Guesses - ${wl}!`
            roundDiv.append(li)
        }
    }

    static fetchRounds() {
        if (roundDiv.children.length > 0) {
            removeAllChildElements(roundDiv)
        } else {
            fetch("http://localhost:3000/rounds")
            .then(r => r.json())
            .then(this.appendRounds)
        }
    }
    
    static appendRounds(rounds) {
        for (let round of rounds) {
            let newRound = new Round(round)
            newRound.appendRound()
        }
    }

    static postRound(e) {
        e.preventDefault()
        Round.freshRound()
        const body = {
            round: {
                win: false,
                complete: false,
                guesses: 0,
                word_id: 0,
                word: {
                    id: 0,
                    name: ""
                }
            }
        }
        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        }
        fetch("http://localhost:3000/rounds", options)
        .then(r => r.json())
        .then(round => {
            let newRound = new Round(round)
            newRound.appendRound()
        })    
    }

    static roundOver() {
        let won = false
        const count = document.getElementById("counter")
        if ((roundWin == true) && (parseInt(count.innerText) < 8)) {
            won = true 
        } else {  
            won = false
        } 
            const body = {
            round: {
                win: won,
                complete: true,
                guesses: parseInt(count.innerText),
                word_id: currentRound.children[0].word.id,
                word: {
                    id: currentRound.children[0].word.id,
                    name: currentRound.children[0].word.name
                }
            }
        }
        const options = {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        }
        fetch(`http://localhost:3000/rounds/${currentRound.children[0].id}`, options)
        .then(r => r.json())
        .then(round => {
            let newRound = new Round(round)
            newRound.appendRound()
        })
        .then(removeAllChildElements(currentRound))
        .then(roundWin = false)
    }

    static freshRound() {
        removeAllChildElements(wrongLetters)
        removeAllChildElements(guessDiv)
        if (currentRound.children.length > 0) {
            currentRound.children[0].appendRound()
            removeAllChildElements(currentRound)
        }
        newGuess.hidden = false
        letterBank = []
    }

};




    





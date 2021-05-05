const newGame = document.getElementById("form-new-game")
let roundWin = false

function fetchRounds() {
    fetch("http://localhost:3000/rounds")
    .then(r => r.json())
    .then(appendRounds)
};

function appendRounds(rounds){
    const roundDiv = document.getElementById("pastRounds")
    if (rounds.length > 1) {
        for (let round of rounds) {
            const li = document.createElement("li")
            let wl
            (round.win) ? wl = "WIN" : wl = "LOSS";
            if (round.complete) {
                li.innerText = `Round ${round.id} -  Word: ${round.word.name}  -  ${wl}!`
            } else {
                li.innerText = `Round ${round.id} - In Progress...`
            }
            roundDiv.append(li)
        }
    } else { 
        const li = document.createElement("li")
        let wl
        (rounds.win) ? wl = "WIN" : wl = "LOSS";
        if (rounds.complete) {
            li.innerText = `Round ${rounds.id} -  Word: ${rounds.word.name}  -  ${wl}!`
        } else {
            li.innerText = `Round ${rounds.id} - In Progress...`
        }
        roundDiv.append(li)
        appendGuessPlatform(rounds)
        // function to create 'blank spaces for guessing' with the newest rounds obj
    }
};

function postRound(e) {
    e.preventDefault()
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
    .then(appendRounds)
    // method to display 'guess-platform'
    // method to display 'guess-letters'
    
}

function roundOver() {
    // set Round.all.last win/complete/guesses
    fetch("http://localhost:3000/rounds")
    .then(r => r.json())
    .then(getLastRound)
}

function getLastRound(rounds) {
    debugger 
    const body = {
        round: {
            win: false,
            complete: true,
            guesses: parseInt(counter.innerText),
            word_id: rounds[rounds.length -1].word.id,
            word: {
                id: rounds[rounds.length -1].word.id,
                name: rounds[rounds.length -1].word.name
            }
        }
    }
    rounds[rounds.length -1].complete = true


}
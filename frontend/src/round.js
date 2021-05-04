const newGame = document.getElementById("form-new-game")


function fetchRounds() {
    fetch("http://localhost:3000/rounds")
    .then(r => r.json())
    .then(appendRounds)
};

function appendRounds(rounds){
    const roundDiv = document.getElementById("pastRounds")
    for (let round of rounds) {
        debugger
        const li = document.createElement("li")
        let wl
        (round.win) ? wl = "WIN" : wl = "LOSS";
        if (round.complete) {
            li.innerText = `Round ${round.id} -  Word: ${round.word.name}  -  ${wl}!`
        } else {
            li.innerText = `Round ${round.id}`
        }
        roundDiv.append(li)
    }
};

function postRound(e) {
    e.preventDefault()
    const options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({round: {win: false, complete: false} })
    }
    fetch("http://localhost:3000/rounds", options)
    .then(r => r.json())
    .then(round => console.log(round))
    fetchWord()
    // method to display 'guess-platform'
    // method to display 'guess-letters'
    
}
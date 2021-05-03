function fetchRounds() {
    fetch("http://localhost:3000/rounds")
    .then(r => r.json())
    .then(appendRounds)
};

function appendRounds(rounds){
    const roundDiv = document.getElementById("pastRounds")
    for (let round of rounds) {
        const li = document.createElement("li")
        let wl
        (round.win) ? wl = "WIN" : wl = "LOSS";
        li.innerText = `Round ${round.id} -  ${wl}`
        roundDiv.append(li)
    }
}
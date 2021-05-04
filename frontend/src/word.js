const newGuess = document.getElementById("guess-a-letter")




function fetchWord() {
// find random word from back


}

function postWord() {
    const randomWord = "testWord"

    const options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        // how to select last round?
        body: JSON.stringify({word: {name: randomWord, round_id: `${Round.all.last.id}`}})
    }
    fetch("http://localhost:3000/words", options)
    .then(r => r.json())
    .then(word => console.log(word))
}
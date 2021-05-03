function fetchWord() {

    const randomWord = ""

    const options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({word: {name: randomWord, round_id: 1}})
    }
    fetch("http://localhost:3000/words", options)
    .then(r => r.json())
    .then(round => console.log(round))
}
newGame.addEventListener('submit', Round.postRound)
newGuess.addEventListener('submit', Word.wordIncludesLetter)

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

Round.fetchRounds()
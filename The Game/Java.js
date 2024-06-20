document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const cardLetters = ['A', 'j', 'C', 'K', 'J', 'S', 'Z', 'H'];
    let cards = [...cardLetters, ...cardLetters];
    let firstCard, secondCard;
    let lockBoard = false;
    let matches = 0;

 //I can say with absolute certainty that you have ruined card games for me   
    cards.sort(() => 0.5 - Math.random());

    
    cards.forEach(letter => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.letter = letter;
        card.textContent = letter;
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    });

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('face-up');

        if (!firstCard) {
        
            firstCard = this;
            return;
        }

    
        secondCard = this;
        checkForMatch();
    }

    function checkForMatch() {
        if (firstCard.dataset.letter === secondCard.dataset.letter) {
            disableCards();
            matches++;
            if (matches === cardLetters.length) {
                setTimeout(() => alert('You win!'), 500);
            }
        } else {
            unflipCards();
        }
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
    }
//I kept it simple like myself
    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('face-up');
            secondCard.classList.remove('face-up');
            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }
});

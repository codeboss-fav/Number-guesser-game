let min = 1,
    max = 10,
    winningNum = getRandomNum(),
    guessesLeft = 3;

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
})

guessBtn.addEventListener('click', takeGuess);

function takeGuess(e) {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max ) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    };

    if (guess === winningNum) {
        gameOver(true, `Number is correct, YOU WIN!`)
    } else {
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            gameOver(false, `Game over you lost. The correct answer was ${winningNum}`)
        } else {
            guessInput.value = '';
            setMessage(`Try again You have ${guessesLeft} guesses left`, 'red');
        }
    
        
    }

    
    // e.preventDefault();
}

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);

    guessBtn.value = 'Play Again';
    guessBtn.className = 'play-again';
}

function getRandomNum() {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}
/* choose the important element 
1. card
2. start
3. time
*/

//-----------------------Declare ELements-------------------- 
const cardElement = document.querySelectorAll('.card')

const startElement = document.querySelector('#start')

const timeElement = document.querySelector('#time')

const restartElement = document.querySelector('#restart')

const stateElement = document.querySelector('#state-text')

console.log(cardElement)
//------------------------Viarble-----------------------------


let start

let time = 60

let card1

let card2

let correct = 0

let gameTime

let ResetBackground = `url(./images/10104821.jpg)`

let gameOver 

//---------------------Functions-------------------------------

// to compare between card 

const compareCards = () => {
    if (card1.classList[1] === card2.classList[1]) {
        console.log('Cards MATCH')
        correct += 1
        card1 = null
        card2 = null
        stateElement.textContent = 'Right'

         checkWinCondition()
    }
    else {
        console.log("WRONG CARD")

        card1.style.backgroundImage = 'url(./images/10104821.jpg)'
        card2.style.backgroundImage = 'url(./images/10104821.jpg)'
        card1 = null
        card2 = null
        stateElement.textContent = 'Wrong'
    }
}

// to check if user end all card and win 

function checkWinCondition() {
    if (correct === 6){
        console.log('YOU WIN')
        clearInterval(gameTime)
        stateElement.textContent = 'You Win'
        gameOver = true
        
    }
}

// to handle cards buttons
const handleButton = (event) => {
    if (gameOver) return;

    if (!card1 && !card2) {
        card1 = event.target
        event.target.style.backgroundImage = `url(./images/${card1.classList[1]}.jpg)`
    }
    else if (!card2) {
        card2 = event.target
        event.target.style.backgroundImage = `url(./images/${card2.classList[1]}.jpg)`
        setTimeout(() => { compareCards() }, 500)
    }
}

// if time end the game will stop 
function checkLose() {
    if (time <= 0) {
        console.log('you lose')
        clearInterval(gameTime)
        stateElement.textContent = 'You Lose'
        gameOver = true

    }
}

// to sit the time
function countdown() {

    gameTime = setInterval(() => {
        time--
        timeElement.textContent = `Time: 00:${time}`

        console.log(time)
        checkLose()

    }, 1000)
}


// to start the game and all function when user click on start button
function startGame() {
    cardElement.forEach((oneCard) => {
        oneCard.addEventListener('click', handleButton)



    })
    countdown()

    startElement.disabled = true
}



//-----------------------------------------------Event Listener-----------------------------------
startElement.addEventListener('click', startGame)






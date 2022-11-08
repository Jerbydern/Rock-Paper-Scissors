//Rock Paper Scissors

let buttons = document.querySelectorAll('button');
let outcome = document.querySelector('.outcome')
let playerWins = 0
let gameOver = false
let winMessage = 'YOU WIN. I WILL HAVE MY REVENGE'
let loseMessage = 'I WIN! HAHAHAHAHAHAHAH!!!!'
let playerScoreDisp = document.querySelector('#playerScoreDisp')
let compScoreDisp = document.querySelector('#compScoreDisp')
let playerWinFunc = () => {
	playerWins += 1
	playerScoreDisp.innerHTML = playerWins
	if (playerWins >= 5) {
		gameOver = true
		return true
	}
}
let compWinFunc = () => {
	compWins += 1
	compScoreDisp.innerHTML = compWins
	if (compWins >= 5) {
		gameOver = true
		return true
	}
}
let compWins = 0

function compChoice() {
	choices = ['rock','paper','scissors']
	dex = Math.floor(Math.random() * 3)
	return choices[dex]
}

function round(playerSel, compSel) {
	playerSel = playerSel.toLowerCase()
	if (playerSel === 'scissors') {
		if (compSel === 'rock') {
			if (compWinFunc()) {
				return loseMessage
			}
			else {
			return 'Rock beats Scissors! You lose, bitch!'
			}
		}
		if (compSel === 'paper'){
			if (playerWinFunc()){
				return winMessage
			}
			else {
				return 'Scissors... beats... paper... You win. :('
			}
		}
		if (compSel === 'scissors'){
			return "It's a tie!"
		}
	}
	if (playerSel === 'paper') {
		if (compSel === 'rock') {
			if (playerWinFunc()){
				return winMessage
			}
			else {
				return 'Paper beats Rock. That means you win.'
			}
		}
		if (compSel === 'paper'){
			return 'Nothing happens. We tie. >:I'
		}
		if (compSel === 'scissors'){
			if (compWinFunc()) {
				return loseMessage
			}
			else {
			return "I won! Scissors beats Paper! HA!"
			}
		}
	}
	if (playerSel === 'rock') {
		if (compSel === 'rock') {
			return 'Rock and Rock... hm...'
		}
		if (compSel === 'paper'){
			if (compWinFunc()) {
				return loseMessage
			}
			else {
			return 'Rock LOSES to Paper. Hehehehehe'
			}
		}
		if (compSel === 'scissors'){
			if (playerWinFunc()) {
				return winMessage
			}
			else {return "Rock beats Scissors."}
		}
	}
}

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		if (gameOver === false){
			let result = document.createElement('div');
			result.innerHTML = round(button.id, compChoice())
			if (gameOver === true){
				result.style = "color:purple;"
			}
			outcome.appendChild(result)
		}
	})
})




/*function game() {
	for (let i = 0 ; i < 5 ; i++) {
		result = round(prompt('Make your choice', 'Rock'), compChoice())
		console.log("Round " + (i + 1) + ": " + result)
	}
}
game() */

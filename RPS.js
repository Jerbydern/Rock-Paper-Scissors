//Rock Paper Scissors

let buttons = document.querySelectorAll('button');

function compChoice() {
	choices = ['rock','paper','scissors']
	dex = Math.floor(Math.random() * 3)
	return choices[dex]
}

function round(playerSel, compSel) {
	playerSel = playerSel.toLowerCase()
	if (playerSel === 'scissors') {
		if (compSel === 'rock') {
			return 'Rock beats Scissors! You lose, bitch!'
		}
		if (compSel === 'paper'){
			return 'Scissors... beats... paper... You win. :('
		}
		if (compSel === 'scissors'){
			return "It's a tie!"
		}
	}
	if (playerSel === 'paper') {
		if (compSel === 'rock') {
			return 'Paper beats Rock. That means you win.'
		}
		if (compSel === 'paper'){
			return 'Nothing happens. We tie. >:I'
		}
		if (compSel === 'scissors'){
			return "I won! Scissors beats Paper! HA!"
		}
	}
	if (playerSel === 'rock') {
		if (compSel === 'rock') {
			return 'Rock and Rock... hm...'
		}
		if (compSel === 'paper'){
			return 'Rock LOSES to Paper. Hehehehehe'
		}
		if (compSel === 'scissors'){
			return "Rock beats Scissors."
		}
	}
}

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		console.log(round(button.id, compChoice()))
	})
})




/*function game() {
	for (let i = 0 ; i < 5 ; i++) {
		result = round(prompt('Make your choice', 'Rock'), compChoice())
		console.log("Round " + (i + 1) + ": " + result)
	}
}
game() */



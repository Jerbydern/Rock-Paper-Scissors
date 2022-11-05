//Rock Paper Scissors

function compChoice() {
	choices = ['Rock','Paper','Scissors']
	dex = Math.floor(Math.random() * 3)
	return choices[dex]
}

function round(playerSel, compSel) {
	prompt('Make your choice', 'rock')
}


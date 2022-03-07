let userScore: number = 0
let computerScore: number = 0
let counter: number = 0
let startButton: HTMLButtonElement = document.querySelector(".start-button")
let gameButtons: HTMLDivElement = document.querySelector(".game-buttons")
let startView: HTMLDivElement = document.querySelector(".start-view")
let instructions: HTMLDivElement = document.querySelector(".instructions")
let movesField: HTMLDivElement = document.querySelector(".moves")
let resultField: HTMLDivElement = document.querySelector(".result")


function startGame(): void {
  clearElement(instructions)
  clearElement(resultField)
  userScore = 0
  computerScore = 0
  counter = 0
  outputMessage(`Moves used: ${counter}/3`, instructions)
  hideStartView()
  clearElement(movesField)
}

function clearElement(element: HTMLElement): void {
  element.innerHTML = ''
}

function outputMessage(message: string, moveField: HTMLDivElement): void {
  moveField.innerHTML += `<p>${message}</p>`
}

function hideStartView(): void {
  gameButtons.style.display = "block"
  startView.style.display = "none"
}

function showStartView(): void {
  startView.style.display = "block"
  gameButtons.style.display = "none"
}

function getComputerMove(): guess {
  let move = Math.floor(Math.random() * 3)
  return {
    move: move,
    player: "Computer"
  }
}

interface guess {
  move: number // 0, 1 or 2
  player: string // "User" or "Computer"
}

enum moves {
  Rock,
  Paper,
  Scissors
}

function handleUserChoice(choice: number): void {
  clearElement(movesField)
  counter++
  let userGuess: guess = {
    move: choice,
    player: "User"
  }
  let computerGuess: guess = getComputerMove()
  clearElement(instructions)
  outputMessage(`Moves used: ${counter}/3`, instructions)
  outputMessage(`You chose ${moves[userGuess.move]}`, movesField)
  outputMessage(`Computer chose ${moves[computerGuess.move]}`, movesField)
  let winner: guess = calculateWinner(userGuess, computerGuess)
  if (winner.player === "User") userScore++
  if (winner.player === "Computer") computerScore++
  outputMessage(`${winner.player} wins with ${moves[winner.move]}`, resultField)
  checkRoundProgress()
}

function checkRoundProgress(): void {
  if (userScore === 2 || computerScore === 2 || counter === 3) {
    showStartView()
    clearElement(instructions)
    clearElement(movesField)
    if (userScore > computerScore) outputMessage(`Moves used: ${counter}/3. You won the round!`, instructions)
    else if (userScore === computerScore) outputMessage(`Moves used: ${counter}/3. The round is DREW!`, instructions)
    else outputMessage(`Moves used: ${counter}/3. You lost the round!`, instructions)
    counter = 0
  }
}

function calculateWinner(guessOne: guess, guessTwo: guess): guess {
  if (guessOne.move == guessTwo.move)
  return { player: "Neither", move: guessOne.move }

  switch (guessOne.move) {
    case moves.Rock:
      if (guessTwo.move === moves.Paper) return guessTwo
      break
    case moves.Paper:
      if (guessTwo.move === moves.Scissors) return guessTwo
      break
    case moves.Scissors:
      if (guessTwo.move === moves.Rock) return guessTwo
      break
    default:
      return guessOne
  }
  return guessOne
}
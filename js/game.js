var userScore = 0;
var computerScore = 0;
var counter = 0;
var startButton = document.querySelector(".start-button");
var gameButtons = document.querySelector(".game-buttons");
var startView = document.querySelector(".start-view");
var instructions = document.querySelector(".instructions");
var movesField = document.querySelector(".moves");
var resultField = document.querySelector(".result");
function startGame() {
    clearElement(instructions);
    clearElement(resultField);
    userScore = 0;
    computerScore = 0;
    counter = 0;
    outputMessage("Moves used: ".concat(counter, "/3"), instructions);
    hideStartView();
    clearElement(movesField);
}
function clearElement(element) {
    element.innerHTML = '';
}
function outputMessage(message, moveField) {
    moveField.innerHTML += "<p>".concat(message, "</p>");
}
function hideStartView() {
    gameButtons.style.display = "block";
    startView.style.display = "none";
}
function showStartView() {
    startView.style.display = "block";
    gameButtons.style.display = "none";
}
function getComputerMove() {
    var move = Math.floor(Math.random() * 3);
    return {
        move: move,
        player: "Computer"
    };
}
var moves;
(function (moves) {
    moves[moves["Rock"] = 0] = "Rock";
    moves[moves["Paper"] = 1] = "Paper";
    moves[moves["Scissors"] = 2] = "Scissors";
})(moves || (moves = {}));
function handleUserChoice(choice) {
    clearElement(movesField);
    counter++;
    var userGuess = {
        move: choice,
        player: "User"
    };
    var computerGuess = getComputerMove();
    clearElement(instructions);
    outputMessage("Moves used: ".concat(counter, "/3"), instructions);
    outputMessage("You chose ".concat(moves[userGuess.move]), movesField);
    outputMessage("Computer chose ".concat(moves[computerGuess.move]), movesField);
    var winner = calculateWinner(userGuess, computerGuess);
    if (winner.player === "User")
        userScore++;
    if (winner.player === "Computer")
        computerScore++;
    outputMessage("".concat(winner.player, " wins with ").concat(moves[winner.move]), resultField);
    checkRoundProgress();
}
function checkRoundProgress() {
    if (userScore === 2 || computerScore === 2 || counter === 3) {
        showStartView();
        clearElement(instructions);
        clearElement(movesField);
        if (userScore > computerScore)
            outputMessage("Moves used: ".concat(counter, "/3. You won the round!"), instructions);
        else if (userScore === computerScore)
            outputMessage("Moves used: ".concat(counter, "/3. The round is DREW!"), instructions);
        else
            outputMessage("Moves used: ".concat(counter, "/3. You lost the round!"), instructions);
        counter = 0;
    }
}
function calculateWinner(guessOne, guessTwo) {
    if (guessOne.move == guessTwo.move)
        return { player: "Neither", move: guessOne.move };
    switch (guessOne.move) {
        case moves.Rock:
            if (guessTwo.move === moves.Paper)
                return guessTwo;
            break;
        case moves.Paper:
            if (guessTwo.move === moves.Scissors)
                return guessTwo;
            break;
        case moves.Scissors:
            if (guessTwo.move === moves.Rock)
                return guessTwo;
            break;
        default:
            return guessOne;
    }
    return guessOne;
}
//# sourceMappingURL=game.js.map
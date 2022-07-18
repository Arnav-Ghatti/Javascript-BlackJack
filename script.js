// Card Data
var playerCards = [];
var compCards = [];

// Getting user name

var userName = prompt("Enter your name.");

var nameH2 = document.getElementById("player-name");
nameH2.innerHTML = userName;

// Generating Random Numbers
function genCard() {
    var randNum = Math.random();
    randNum = Math.floor(randNum * 11) + 1 // Generates numbers between 1, 11 (included)

    return randNum
}

// Initialising
for (var i = 0; i < 2; i++) {
    playerCards.push(genCard());
}

for (var i = 0; i < 2; i++) {
    compCards.push(genCard());
}

// Displaying Cards
var playerCardsTag = document.getElementById("player-cards");
playerCardsTag.innerHTML = "Your cards: " + playerCards.join();

var compCardsTag = document.getElementById("comp-cards");
compCardsTag.innerHTML = "Your cards: " + compCards.join();

// Displaying Total

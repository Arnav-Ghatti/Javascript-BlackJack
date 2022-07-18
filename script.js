// Card Data
var playerCards = [];
var compCards = [];

// Getting user name

var userName = prompt("Enter your name.");

var nameH2 = document.getElementById("player-name");
if (userName != "") {
    nameH2.innerHTML = userName;
} else {
    nameH2.innerHTML = "User";
}

// Generating Random Numbers
function genCard() {
    var randNum = Math.random();
    randNum = Math.floor(randNum * 11) + 1 // Generates numbers between 1, 11 (included)

    return randNum
}

function sum(arr) {
    s = 0;

    for (var i = 0; i < arr.length; i++) {
        s += arr[i];
    }

    return s;
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
var playerTotal = sum(playerCards);
var playerTotalTag = document.getElementById("player-total");
playerTotalTag.innerHTML = "Total = " + playerTotal;

var compTotal = sum(compCards);
var compTotalTag = document.getElementById("comp-total");
compTotalTag.innerHTML = "Total = " + compTotal;
// Card Data
var playerCards = [];
var compCards = [];

var playerCardsTag = document.getElementById("player-cards");
var playerTotalTag = document.getElementById("player-total");

var compCardsTag = document.getElementById("comp-cards");
var compTotalTag = document.getElementById("comp-total");

var standBtn = document.getElementById("stand");
var hitBtn = document.getElementById("hit");

// Getting user name

var userName = prompt("Enter your name.");

var nameH2 = document.getElementById("player-name");
if (userName != "" && userName != null) {
    nameH2.innerHTML = userName;
} else {
    nameH2.innerHTML = "User";
}

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

function displayData() {
    // Displaying Cards
    playerCardsTag.innerHTML = "Your cards: " + playerCards.join();
    compCardsTag.innerHTML = "Your cards: " + compCards.join();

    // Displaying Total
    var playerTotal = sum(playerCards);
    playerTotalTag.innerHTML = "Total = " + playerTotal;

    var compTotal = sum(compCards);
    compTotalTag.innerHTML = "Total = " + compTotal;
}

function disableBtns() {
    
}

// Initialising
for (var i = 0; i < 2; i++) {
    playerCards.push(genCard());
}

for (var i = 0; i < 2; i++) {
    compCards.push(genCard());
}

displayData();

// Button Functionality
hitBtn.addEventListener("click", function () {
    playerCards.push(genCard());
    displayData();
})

standBtn.addEventListener("click", function () {
    while (sum(compCards) < 17) {
        compCards.push(genCard());
    }
    displayData();

    disableBtns();
})
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

function checkConds(stand) {

    
    if (sum(playerCards) > 21) {
        return false;
    }
    if (sum(compCards) > 21) {
        return true;
    }
    
    if(stand == true) {
        if (sum(playerCards) > sum(compCards)) {
            return true;
        }
        if (sum(playerCards) < sum(compCards)) {
            return false;
        }
        
        if (sum(playerCards) == 21) {
            return true;
        }
        if (sum(compCards) == 21) {
            return false;
        }
    }
}

function displayResults(player) {
    if (player === true) {
        alert("You Win :)");
    } else if (player === false) {
        alert("You Lose :(")
    } else {
        return
    }
}


// Button Functionality
hitBtn.addEventListener("click", function () {
    playerCards.push(genCard());
    displayData();
    displayResults(checkConds(false));
})

standBtn.addEventListener("click", function () {
    while (sum(compCards) < 17) {
        compCards.push(genCard());
    }
    displayData();
    displayResults(checkConds(true));
})

// Initialising
for (var i = 0; i < 2; i++) {
    playerCards.push(genCard());
}

for (var i = 0; i < 2; i++) {
    compCards.push(genCard());
}

displayData();
displayResults(checkConds(false));
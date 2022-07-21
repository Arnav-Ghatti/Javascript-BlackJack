// Card Data
var playerCards = [];
var dealerCards = [];

var playerCardsTag = document.getElementById("player-cards");
var playerTotalTag = document.getElementById("player-total");

var dealerCardsTag = document.getElementById("dealer-cards");
var dealerTotalTag = document.getElementById("dealer-total");

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
    dealerCardsTag.innerHTML = "Your cards: " + dealerCards.join();

    // Displaying Total
    var playerTotal = sum(playerCards);
    playerTotalTag.innerHTML = "Total = " + playerTotal;

    var dealerTotal = sum(dealerCards);
    dealerTotalTag.innerHTML = "Total = " + dealerTotal;
}

function checkConds(stand) {

    
    if (sum(playerCards) > 21) {
        return false;
    }
    if (sum(dealerCards) > 21) {
        return true;
    }
    
    if(stand == true) {
        if (sum(playerCards) > sum(dealerCards)) {
            return true;
        }
        if (sum(playerCards) < sum(dealerCards)) {
            return false;
        }
        
        if (sum(playerCards) == 21) {
            return true;
        }
        if (sum(dealerCards) == 21) {
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
    while (sum(dealerCards) < 17) {
        dealerCards.push(genCard());
    }
    displayData();
    displayResults(checkConds(true));
})

// Initialising
for (var i = 0; i < 2; i++) {
    playerCards.push(genCard());
}

for (var i = 0; i < 2; i++) {
    dealerCards.push(genCard());
}

displayData();
displayResults(checkConds(false));
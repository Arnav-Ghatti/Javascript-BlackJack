// Card Data
var playerCards = [];
var dealerCards = [];

var playerCardsTag = document.getElementById("player-cards");
var playerTotalTag = document.getElementById("player-total");

var dealerCardsTag = document.getElementById("dealer-cards");
var dealerTotalTag = document.getElementById("dealer-total");

var playerDataCard = document.getElementById("player-data");
var dealerDataCard = document.getElementById("dealer-data");

var standBtn = document.getElementById("stand");
var hitBtn = document.getElementById("hit");
var title = document.getElementById("title");

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
        return [false, "You went over"];
    }
    if (sum(dealerCards) > 21) {
        return [true, "The dealer went over"];
    }

    if (stand == true) {
        if (sum(playerCards) > sum(dealerCards)) {
            return [true, "You win"];
        } else if (sum(playerCards) < sum(dealerCards)) {
            return [false, "You lose"];
        } else {
            return [null, "Tie!"]
        }
    }

    if (sum(playerCards) == 21) {
        return [true, "Blackjack!"];
    }
    if (sum(dealerCards) == 21) {
        return [false, "Blackjack!"];
    }
}

function disableBtns() {
    standBtn.disabled = true;
    hitBtn.disabled = true;

    standBtn.classList.add("disabled");
    hitBtn.classList.add("disabled")
}

function showWinner(playerWin) {
    if (playerWin === true) {
        playerDataCard.classList.add("win");
        dealerDataCard.classList.add("lose")
    } else {
        dealerDataCard.classList.add("win");
        playerDataCard.classList.add("lose");
    }
}

function displayResults(stat) {
    if (stat[0] === true) {
        disableBtns();
        showWinner(true);
    } else if (stat[0] === false) {
        disableBtns();
        showWinner(false);
    } else {
        return
    }

    title.innerHTML = stat[1]
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
var memoryCard;
// var plaatjes = document.getElementsByTagName("img");
var random = 0;
var randomNumbers = [];
var firstCard, secondCard;
var checked;
var score1 = 0;
var score2 = 0;
var beurt = true;
var TEMPsam = false;
createPicsHolders()
createRandomNumbersArray()
createImageBackground()

function createPicsHolders() {
    pics = document.getElementById("pics");
    for (var i = 0; i < 18; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-"+i;
        pics.appendChild(pictureHolder);
    }
}

function createRandomNumbersArray() {
    while (randomNumbers.length < 18) {
        random = Math.floor(Math.random() * 18) + 1;
        if (randomNumbers.lastIndexOf(random) == -1) {
            randomNumbers.push(random);
        }
    }
}


function createImageBackground(id) {
    var pictureHolders = document.getElementsByClassName("picture-holder");
    for (var teller = 0; teller < pictureHolders.length; teller++){
        memoryCard = document.createElement("img");
        memoryCard.src = "img/background.jpg";
        memoryCard.id = randomNumbers[teller];
        memoryCard.addEventListener("click", function () {
            showPicsWhenCLickedOn(this.id);
            givePicturesId(this.id);
        });
        pictureHolders[teller].appendChild(memoryCard);
    }
}

function showPicsWhenCLickedOn(id) {
    if (TEMPsam == false) {
        var clickedPicture = document.getElementById(id);
        clickedPicture.src = "img/foto" + id + ".jpg";

    }
}

function givePicturesId(id) {
    if (firstCard && !secondCard) secondCard = id;
    if (!firstCard) firstCard = id;
    if (firstCard && secondCard) {
        TEMPsam = true;
        clickedOnBothCards = true;
        var idOne = parseInt(firstCard);
        var idTwo = parseInt(secondCard);
        checkForSamePictures(idOne, idTwo)
    }
}

function checkForSamePictures(idOne, idTwo) {
    if (idOne == (idTwo + 9)) {
        checked = true;
    } else if(idOne == (idTwo - 9)) {
        checked = true;
    }
}

function buttonNext() {
    var idOne = parseInt(firstCard);
    var idTwo = parseInt(secondCard);
    addScoreToPlayer();
    resetPicturesWhenCombinationFalse(idOne, idTwo);
    resetValuesAfterTurn();
    TEMPsam = false;
    console.log(idOne);
    console.log(idTwo);
    console.log(firstCard);
    console.log(secondCard);
}

function resetPicturesWhenCombinationFalse(idOne, idTwo) {
    if (checked == false) {
        if (beurt == true) beurt = false;
        else if (beurt == false) beurt = true;
        var falsePictureOne = document.getElementById(idOne);
        falsePictureOne.src = "img/background.jpg";
        var falsePictureTwo = document.getElementById(idTwo);
        falsePictureTwo.src = "img/background.jpg";
    }
}


function addScoreToPlayer() {
    if (checked == true) {
        if (beurt == true) {
            score1 += 1;
            document.getElementById("player1-score").innerText = "Score:" + score1;
        } else if (beurt == false){
            score2 += 1;
            document.getElementById("player2-score").innerText = "Score:" + score2;
        }

    }
}

function resetValuesAfterTurn() {
    if (secondCard) {
        firstCard = null;
        secondCard = null;
        checked = false;
    }
}
var plaatjes = document.getElementsByTagName("img");
var random = 0;
var randomNumbers = [];
pics = document.getElementById("pics");
createPicsHolders()
createImage()
createImageBackground()

function createPicsHolders() {
    for (var i = 0; i < 18; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-"+i;
        pics.appendChild(pictureHolder);
    }
}
while (randomNumbers.length < 18) {
    random = Math.floor(Math.random() * 18) + 1;
    if (randomNumbers.lastIndexOf(random) == -1) {
        randomNumbers.push(random);
    }
}

random = 0;
for (var plaatje in plaatjes) {
    plaatjes[plaatje].src = "img/foto" + randomNumbers[random] + ".jpg";
    random++
}

function createImage() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for (var i = 0; i < pictureHolders.length; i++){
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet_"+ (i+1);
        logoPlaatje = document.createElement("img");
        logoPlaatje.src = "img/foto" + (i+1) + ".jpg";
        logoPlaatje.id = (i+1);
        logoPlaatje.addEventListener("dblclick", function () {
            createImageBackground(this.id);
        });
        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(logoPlaatje);
    }
}

function createImageBackground(id) {
    console.log("gaat om foto" + id);
    notsofavoriet = document.getElementsByClassName("favoriet");

    for (var i = 0; i < notsofavoriet.length; i++){
        notsofavoriet[i].style.backgroundImage = "none";
    }

    favoriet = document.getElementById("favoriet_" + id)
    // favoriet.style.backgroundImage = "('url/img/.jpg')";
}


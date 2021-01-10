
$(document).on('click', '.toggleMusic', function () {
    icon = $(this).find("i");
    icon.toggleClass('fa-volume-off fa-volume-mute');
});

//variables
var avocados = document.querySelectorAll('.avocado');
var bowls = document.querySelectorAll('.bowl');
var timeUp = false;
// const highestScore = document.getElementById('#highestScore');

// function to get a random avocado appear in a hole
function randomAvocado(avocados) {
    var index = Math.floor(Math.random() * avocados.length);
    var active = avocados[index];
    console.log("Active: " + active);
    return active;
}

// function to generate a random time for the avocado to stay up
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// function that makes an avocado to pop up
function popUp() {
    var activeAvocado = randomAvocado(avocados);
    var popUpTime = randomTime(1000, 2500);

    activeAvocado.classList.remove('down');
    console.log("continue");
    setTimeout(function () {
        activeAvocado.classList.add('down');
        console.log("cont-2");
        if (!timeUp) {
            popUp()
        }
    }, popUpTime);
}

function startGame() {
    console.log("start");
    timeUp = false;
    score = 0;
    popUp();
    setTimeout(() => timeUp = true, 15000); //show random moles for 15 seconds
}

function smash(e) {
    this.classList.add("smashed");
    console.log("rotate");
    //debugger;
}

avocados.forEach((item) => item.addEventListener("click", smash));
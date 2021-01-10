$(document).on('click', '.toggleMusicButton', function () {
    icon = $(this).find("i");
    icon.toggleClass('fa-volume-mute fa-volume-off');
});

//variables
var avocados = document.querySelectorAll('.avocado');
var bowls = document.querySelectorAll('.bowl');
var timeUp = false;
var smashSound = new sound("assets/audio/smash.wav");
var gameMusic = new sound("assets/audio/gameMusic.wav");
var isPlaying = false;
// var highestScore = document.getElementById('#highestScore');

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
    // gameMusic.muted = true;
    gameMusic.play();
    var activeAvocado = randomAvocado(avocados);
    var popUpTime = randomTime(1000, 1800);

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

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

function startGame() {
    console.log("start");
    timeUp = false;
    score = 0;
    popUp();
    setTimeout(() => timeUp = true, 15000); //show random moles for 15 seconds
}

function smash() {
    this.src = "assets/images/smash.png";
    console.log(this.src);
    smashSound.play();
    setTimeout(() => {
        this.src = "assets/images/avocado1.png";
    }, 750);
    console.log(this.src);
}

// function to play and pause game music
function togglePlay() {
  isPlaying ? gameMusic.pause() : gameMusic.play();
};

gameMusic.onplaying = function() {
  isPlaying = true;
};
gameMusic.onpause = function() {
  isPlaying = false;
};

//event listeners
avocados.forEach((item) => item.addEventListener("click", smash));
document.getElementsByID("playMusic").addEventListener("click", togglePlay);

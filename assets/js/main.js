$(document).on('click', '.toggleMusicButton', function () {
    icon = $(this).find("i");
    icon.toggleClass('fa-volume-mute fa-volume-off');
});

//variables
var veg = document.querySelectorAll('.avocado');
var bowls = document.querySelectorAll('.bowl');
var timeUp = false;
var smashSound = new sound("assets/audio/smash.wav");
var gameMusic = new sound("assets/audio/gameMusic.wav");
var score = 0;

// function to get a random avocado appear in a hole
function randomVeg(veg) {
    var index = Math.floor(Math.random() * veg.length);
    var active = veg[index];
    return active;
}

// function to generate a random time for the avocado to stay up
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// function that makes an avocado to pop up
function popUp1() {
    var activeAvocado = randomVeg(veg);
    var popUpTime = randomTime(1000, 2500);

    activeAvocado.classList.remove('down');
    console.log("continue");
    setTimeout(function () {
        activeAvocado.classList.add('down');
        console.log("cont-2");
        if (!timeUp) {
            popUp1();
        }
    }, popUpTime);
}

function checkScore() {
    console.log('check score');

    if (score >= 80) {
        timeUp = false;
        gameTimer();
        setTimeout(() =>
            timeUp = true, 18000);
        setTimeout(function () {
            popUp1();
            secondsToStart()
        }, 3000);

    } else {
        gameover();
    }
}

function checkScore2() {
    console.log('check score2');
    if (score >= 150) {
        setTimeout(function () {
            popUp3();
            secondsToStart()
        }, 3500);
        timeUp = false;
        setTimeout(() =>
            timeUp = true, 15000);
    } else {
        gameover();
    }
}

function popUp2() {
    var activeTomato = randomVeg(veg);
    var popUpTime = randomTime(900, 2000);
    activeTomato.classList.remove('avocado', 'down');
    activeTomato.classList.add('tomato');
    console.log("continue3");
    setTimeout(function () {
        activeTomato.classList.add('down');
        console.log("cont-4");
        if (!timeUp) {
            popUp2();
        }
    }, popUpTime);
}

function popUp3() {
    var activeOnion = randomVeg(veg);
    var popUpTime = randomTime(6000, 1000);

    activeAvocado.classList.remove('down');
    console.log("continue5");
    setTimeout(function () {
        activeAvocado.classList.add('down');
        console.log("cont-6");
        if (!timeUp) {
            popUp1();
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
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    };
}

//function that starts and controls the game
function startGame() {
    setTimeout(function () {
        popUp1();
        gameTimer();
        setTimeout(() =>
            timeUp = true, 15000);
    }, 3000);
    secondsToStart();
    gameMusic.play();

    setTimeout(() =>
        checkScore(), 18000);

    setTimeout(() =>
        checkScore2(), 36000);
};

function gameover() {
    alert("GAMEOVER!");
}

//function to smash the veggies and get scores
function smash() {
    this.src = "assets/images/greenSmash.png";
    smashSound.play();
    setTimeout(() => {
        this.src = "assets/images/avocado1.png";
    }, 650);
    score += 10;
    document.getElementById("score").innerHTML = score;
    console.log(score);
}

// function to play and pause game music
function togglePlay() {
    return gameMusic.paused ? gameMusic.play() : gameMusic.stop();
}

//function to store highest score
function saveScore(score) {
    localStorage.highestScore = this.score;
}

//function to display timer
function gameTimer() {
    var seconds = document.getElementById("timer").textContent;
    var countdown = setInterval(function () {
        seconds--;
        document.getElementById("timer").textContent = seconds;
        if (seconds <= 0) clearInterval(countdown);
    }, 1000);
}

//function to display seconds before the game starts
function secondsToStart() {
    document.getElementById("countdown").style.display = "block";
    var seconds = 3;
    var countdown = setInterval(function () {
        seconds--;
        document.getElementById("countdown").textContent = seconds;
        if (seconds <= 0) clearInterval(countdown);
    }, 1000);
    setTimeout(() => {
        document.getElementById("countdown").style.display = 'none';
    }, 3000);
}

//event listeners
veg.forEach((item) => item.addEventListener("click", smash));
document.getElementById('playMusic').onToggle = togglePlay()

$(document).on('click', '.toggleMusicButton', function () {
    icon = $(this).find("i");
    icon.toggleClass('fa-volume-mute fa-volume-off');
});

//variables
var veg = document.querySelectorAll('.veg');
var bowls = document.querySelectorAll('.bowl');
var timeUp = false;
var smashSound = new sound("assets/audio/smash.wav");
var gameMusic = new sound("assets/audio/gameMusic.wav");
var score = 0;
var currentLevel = 1;

function checkLevel(clickedVeg) {
    if (currentLevel == 1) {
        smashAvocado(clickedVeg);
    } else if (currentLevel == 2) {
        smashTomato(clickedVeg);
    } else if (currentLevel == 3) {
        smashGarlic(clickedVeg);
    }
}

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
    //activeAvocadoo.src = "assets/images/avocado1.png";
    var popUpTime = randomTime(1500, 2500);
    activeAvocado.classList.remove('down');
    setTimeout(function () {
        activeAvocado.classList.add('down');
        if (!timeUp) {
            if(currentLevel != 1) {
                return;
            }
            popUp1();
        }
    }, popUpTime);
}

function popUp2() {
    var activeTomato = randomVeg(veg);
    var popUpTime = randomTime(1000, 2200);
    activeTomato.src = "assets/images/tomato.png";
    activeTomato.classList.remove('down');
    setTimeout(function () {
        activeTomato.classList.add('down');
        if (!timeUp) {
            if (currentLevel != 2) {
                return;
            }
            popUp2();
        }
    }, popUpTime);
}

function popUp3() {
    var activeGarlic = randomVeg(veg);
    activeGarlic.src = "assets/images/garlic.png";
    var popUpTime = randomTime(900, 1500);
    activeGarlic.classList.remove('down');
    setTimeout(function () {
        activeGarlic.classList.add('down');
        if (!timeUp) {
            if (currentLevel != 3) {
                return;
            }
            popUp3();
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

function level1() {
    currentLevel = 1;
    setTimeout(function () {
        popUp1();
        gameTimer();
        setTimeout(() => {
            timeUp = true;
            level2()}, 15000);
    }, 3000);
    secondsToStart();
}

function level2() {
    currentLevel = 2;
    if (score < 60) {
        gameover();
        return;
    } else {
        timeUp = false;
        setTimeout(function () {
            popUp2();
            gameTimer();
            setTimeout(() => {
                timeUp = true;
                level3()}, 15000);
        }, 3000);
        secondsToStart();
    }
}

function level3() {
    currentLevel = 3;
    if (score < 120) {
        gameover();
        return;
    } else {
        timeUp = false;
        setTimeout(function () {
            popUp3();
            gameTimer();
            setTimeout(() => {
                timeUp = true;
                showResults()}, 15000);
        }, 3000);
        secondsToStart();
    }
}

function startGame() {
    level1();
    gameMusic.play();
}

function showResults(){
    if (score >= 200){
        window.location.href = 'recipe.html';
    } else {
        gameover();
    }
}

function gameover() {
    $('#myModal').modal('show');
}

//functions to smash the veggies and get scores
function smashAvocado(clickedVeg) {
    clickedVeg.src = "assets/images/greenSmash.png";
    clickedVeg.style.pointerEvents = "none";
    smashSound.play();
    setTimeout(() => {
        clickedVeg.src = "assets/images/avocado1.png";
        clickedVeg.style.pointerEvents = "auto";
    }, 1200);
    score += 10;
    document.getElementById("score").innerHTML = score;
    console.log(score);
}

function smashTomato(clickedVeg) {
    clickedVeg.src = "assets/images/redSmash.png";
    smashSound.play();
    setTimeout(() => {
        clickedVeg.src = "assets/images/tomato.png";
    }, 1000);
    score += 10;
    document.getElementById("score").innerHTML = score;
    console.log(score);
}

function smashGarlic(clickedVeg) {
    clickedVeg.src = "assets/images/whiteSplash.png";
    smashSound.play();
    setTimeout(() => {
        clickedVeg.src = "assets/images/garlic.png";
    }, 800);
    score += 10;
    document.getElementById("score").innerHTML = score;
    console.log(score);
}

// function to play and pause game music
function togglePlay() {
    return gameMusic.sound.paused ? gameMusic.play() : gameMusic.stop();
}

//function to store highest score
function saveScore(score) {
    localStorage.highestScore = this.score;
}

//function to display timer
function gameTimer() {
    seconds = 15;
    var countdown = setInterval(function () {
        seconds--;
        document.getElementById("timer").textContent = seconds;
        if (seconds <= 0) clearInterval(countdown);
    }, 1000);

}

//function to display seconds before the game starts
function secondsToStart() {
        document.getElementById("secondsToStart").classList.remove('down');
    var seconds = 3;
    document.getElementById("countdown").textContent = seconds;
    var countdown = setInterval(function () {
        seconds--;
        document.getElementById("countdown").textContent = seconds;
        if (seconds <= 0) clearInterval(countdown);
    }, 900);
    setTimeout(() => {
        document.getElementById("secondsToStart").classList.add('down');
        //document.getElementById("secondsToStart").style.display = 'none';
    }, 3000);
}

//event listeners
veg.forEach((item) => item.addEventListener("click", function() {
    checkLevel(item);
}));

document.getElementById('playMusic').onToggle = togglePlay();
//variables
var veg = document.querySelectorAll('.veg');
var bowls = document.querySelectorAll('.bowl');
var timeUp = false;
var smashSound = new sound("assets/audio/smash.wav");
var gameMusic = new sound("assets/audio/gameMusic.wav");
var score = 0;
var highestScore = 0;
var currentLevel = 1;
localStorage.setItem("isToggled", "true");

$(".toggleMusicButton").on('click', function () {
    if (localStorage.getItem('isToggled') == null) {
        localStorage.setItem('isToggled', 'false')
        isToggled = "false";
    } else {
        isToggled = localStorage.getItem("isToggled");
    }
    if (isToggled == 'false') {
        localStorage.setItem('isToggled', true);
    } else {
        localStorage.setItem('isToggled', false);
    }
    icon = $(this).find("i");
    icon.toggleClass('fa-volume-mute fa-volume-off');
});

// function to play and pause game music
function togglePlay() {
    isToggled = localStorage.getItem('isToggled');
    if (isToggled == 'true') {
        gameMusic.play();
    } else {
        gameMusic.stop();
    }
}

// function to check what round of the game is now on
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
    if (!timeUp) {
        var activeAvocado = randomVeg(veg);
        var popUpTime = randomTime(1800, 2500);
        activeAvocado.src = "assets/images/avocado1.png";
        activeAvocado.style.pointerEvents = "auto";
        activeAvocado.classList.remove('down');
        setTimeout(function () {
            activeAvocado.classList.add('down');
            if (currentLevel != 1) {
                return;
            }
            popUp1();
        }, popUpTime);
    }
}

function popUp2() {
    if (!timeUp) {
        var activeTomato = randomVeg(veg);
        var popUpTime = randomTime(1000, 2000);
        activeTomato.src = "assets/images/tomato.png";
        activeTomato.style.pointerEvents = "auto";
        activeTomato.classList.remove('down');
        setTimeout(function () {
            activeTomato.classList.add('down');
            if (currentLevel != 2) {
                return;
            }
            popUp2();

        }, popUpTime);
    }
}

function popUp3() {
    if (!timeUp) {
        var activeGarlic = randomVeg(veg);
        var popUpTime = randomTime(800, 1500);
        activeGarlic.src = "assets/images/garlic.png";
        activeGarlic.style.pointerEvents = "auto";
        activeGarlic.classList.remove('down');
        setTimeout(function () {
            activeGarlic.classList.add('down');
            if (currentLevel != 3) {
                return;
            }
            popUp3();
        }, popUpTime);
    }
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
            updateScore(score);
            if (score > 60) {
                level2();
            } else {
                gameover();
                return;
            }
        }, 15000);
    }, 3000);
    secondsToStart();
}

function level2() {
    currentLevel = 2;
    for (i = 0; i < veg.length; i++) {
        veg[i].src = "assets/images/tomato.png";
    };
    timeUp = false;
    setTimeout(function () {
        popUp2();
        gameTimer();
        setTimeout(() => {
            timeUp = true;
            updateScore();
            if (score > 120) {
                level3();
            } else {
                gameover();
                return;
            }
        }, 15000);
    }, 3000);
    secondsToStart();
}

function level3() {
    currentLevel = 3;
    for (i = 0; i < veg.length; i++) {
        veg[i].src = "assets/images/garlic.png";
    };
    timeUp = false;
    setTimeout(function () {
        popUp3();
        gameTimer();
        setTimeout(() => {
            timeUp = true;
            showResults()
        }, 15000);
    }, 3000);
    secondsToStart();
}

function startGame() {
    document.getElementById("playNow").classList.add('down');
    level1();
}

// function to update highest score
function updateScore(score) {
    if (localStorage.getItem('highestScore') == null) {
        highestScore = localStorage.setItem('highestScore', JSON.stringify(0));
    } else {
        highestScore = localStorage.getItem("highestScore");
    }

    if (this.score > highestScore) {
        highestScore = score;
        localStorage.setItem('highestScore', JSON.stringify(highestScore));
    };
    document.getElementById('highScore').innerText = localStorage.getItem('highestScore');
}

// function to display highest score
function getScore() {
    document.getElementById('highScore').innerText = localStorage.getItem('highestScore');
}

// function in the end of game
function showResults() {
    updateScore(score);
    if (score >= 200) {
        $('#winModal').modal('show');
    } else {
        gameover();
    }
}

function gameover() {
    $('#gameoverModal').modal('show');
}

//functions to smash the veggies and get scores
function smashAvocado(clickedVeg) {
    clickedVeg.src = "assets/images/greenSmash.png";
    clickedVeg.style.pointerEvents = "none";
    smashSound.play();
    score += 10;
    document.getElementById("score").innerHTML = score;
    console.log(score);
}

function smashTomato(clickedVeg) {
    clickedVeg.src = "assets/images/redSmash.png";
    clickedVeg.style.pointerEvents = "none";
    smashSound.play();
    score += 10;
    document.getElementById("score").innerHTML = score;
    console.log(score);
}

function smashGarlic(clickedVeg) {
    clickedVeg.src = "assets/images/whiteSplash.png";
    clickedVeg.style.pointerEvents = "none";
    smashSound.play();
    score += 10;
    document.getElementById("score").innerHTML = score;
    console.log(score);
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
    }, 3000);
}

//event listeners
veg.forEach((item) => item.addEventListener("click", function () {
    checkLevel(item);
}));
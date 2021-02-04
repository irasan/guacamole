//variables
var veg = document.querySelectorAll('.veg');
var timeUp = false;
var smashSound = new sound("assets/audio/smash.wav");
var gameMusic = new sound("assets/audio/gameMusic.wav");
var score = 0;
var highestScore = 0;
var currentLevel = 1;
localStorage.setItem("isToggled", "true");

//function to save the state of music toggle button across the site and change icons accordingly
$(".toggleMusicButton").on('click', function () {
    if (localStorage.getItem('isToggled') == null) {
        localStorage.setItem('isToggled', 'false');
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
        gameMusic.stop();
    } else {
        gameMusic.play();
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
        var popUpTime = randomTime(1500, 2000);
        activeAvocado.src = "assets/images/avocado1.png";
        activeAvocado.style.pointerEvents = "auto";
        activeAvocado.classList.remove('down');
        setTimeout(function () {
            activeAvocado.classList.add('down');
            if (currentLevel != 1) {
                return;
            }
            if (!timeUp) {
                popUp1();
            }
        }, popUpTime);
    } else {
        return;
    }
}

// function that makes a tomato to pop up
function popUp2() {
    if (!timeUp) {
        var activeTomato = randomVeg(veg);
        var popUpTime = randomTime(1000, 1800);
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
    } else {
        return;
    }
}

// function that makes garlic to pop up
function popUp3() {
    if (!timeUp) {
        var activeGarlic = randomVeg(veg);
        var popUpTime = randomTime(500, 1200);
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

//general function for playing sounds (This code was borrowed - see README.md).
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    };
    this.stop = function () {
        this.sound.pause();
    };
}

//function to invoke level 1
function level1() {
    currentLevel = 1;
    secondsToStart();
    setTimeout(function () {
        setTimeout(() => {
            timeUp = true;
            if (score > 50) {
                updateScore(score);
                level2();
            } else {
                gameover();
                return;
            }
        }, 15000);
        gameTimer();
        popUp1();
    }, 3000);
}

//function to invoke level 2
function level2() {
    currentLevel = 2;
    for (i = 0; i < veg.length; i++) {
        veg[i].src = "assets/images/tomato.png";
    }
    setTimeout(function () {
        gameTimer();
        timeUp = false;
        popUp2();
        setTimeout(() => {
            timeUp = true;
            updateScore(score);
            if (score > 120) {
                level3();
            } else {
                gameover();
                return;
            }
        }, 15000);
    }, 3000);
    document.getElementById("timerMessage").innerText = "Round 2 will start in "
    secondsToStart();
}

//function to invoke level 3
function level3() {
    timeUp = false;
    currentLevel = 3;
    for (i = 0; i < veg.length; i++) {
        veg[i].src = "assets/images/garlic.png";
    }
    setTimeout(function () {
        popUp3();
        gameTimer();
        setTimeout(() => {
            timeUp = true;
            showResults();
        }, 15000);
    }, 3000);
    document.getElementById("timerMessage").innerText = "Round 3 will start in "
    secondsToStart();
}

//function that starts the game on clicking the play button
function startGame() {
    document.getElementById("playNow").classList.add('down');
    level1();
}

// function to update highest score
function updateScore(score) {
    if (localStorage.getItem('highestScore') == null) {
        highestScore = localStorage.setItem('highestScore', JSON.stringify(score));
    } else {
        highestScore = localStorage.getItem("highestScore");
    }

    if (this.score > highestScore) {
        highestScore = score;
        localStorage.setItem('highestScore', JSON.stringify(highestScore));
    }
    getScore();
}

// function to display highest score
function getScore() {
    document.getElementById('highScore').innerText = localStorage.getItem('highestScore');
}

// function to end of game (win or lose)
function showResults() {
    updateScore(score);
    if (score >= 200) {
        $('#winModal').modal('show');
    } else {
        gameover();
    }
}

//gameover function
function gameover() {
    $('#gameoverModal').modal('show');
}

//functions to smash the avocados and get scores
function smashAvocado(clickedVeg) {
    clickedVeg.src = "assets/images/green-smash.png";
    clickedVeg.style.pointerEvents = "none";
    smashSound.play();
    score += 10;
    document.getElementById("score").innerHTML = score;
}

//functions to smash tomatoes and get scores
function smashTomato(clickedVeg) {
    clickedVeg.src = "assets/images/red-smash.png";
    clickedVeg.style.pointerEvents = "none";
    smashSound.play();
    score += 10;
    document.getElementById("score").innerHTML = score;
}

//functions to smash garlic and get scores
function smashGarlic(clickedVeg) {
    clickedVeg.src = "assets/images/white-smash.png";
    clickedVeg.style.pointerEvents = "none";
    smashSound.play();
    score += 10;
    document.getElementById("score").innerHTML = score;
}

//function to display game timer (borrowed code - see README.md)
function gameTimer() {
    seconds = 15;
    var countdown = setInterval(function () {
        seconds--;
        document.getElementById("timer").textContent = seconds;
        if (seconds <= 0) clearInterval(countdown);
    }, 1000);
}

//function to display seconds before the game starts (borrowed code - see README.md) 
function secondsToStart() {
    document.getElementById("secondsToStart").classList.remove('down');
    var seconds = 3;
    document.getElementById("countdown").textContent = seconds;
    var countdown = setInterval(function () {
        seconds--;
        document.getElementById("countdown").textContent = seconds;
        if (seconds <= 0) clearInterval(countdown);
    }, 1000);
    setTimeout(() => {
        document.getElementById("secondsToStart").classList.add('down');
    }, 2800);
}

//event listener
veg.forEach((item) => item.addEventListener("click", function () {
    checkLevel(item);
}));
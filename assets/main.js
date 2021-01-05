$(document).on('click', '.toggleMusic', function () {
    icon = $(this).find("i");
    icon.toggleClass('fa-volume-off fa-volume-mute');
});

function game() {
    var avocado = "assets/images/beetle.png";
    var smashed = "assets/images/target.png";
    setTimeout(displayAvocado, 2000);
    clearTimeout();
};

function displayAvocado() {
    setInterval(document.getElementById("start").src = avocado, 2000);
    document.getElementById('played').onclick = function () {
        displayScore();
    }
}

function displayScore() {
    document.getElementById("start").src = smashed;

};
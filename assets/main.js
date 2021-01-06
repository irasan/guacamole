$(document).on('click', '.toggleMusic', function () {
    icon = $(this).find("i");
    icon.toggleClass('fa-volume-off fa-volume-mute');
});


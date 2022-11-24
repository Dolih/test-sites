// import showFilm from "./promises.js";

$('.menu').on('mouseover', function () {
    $(this).addClass('focus');
});

$('.menu').on('mouseout', function () {
    $(this).removeClass('focus');
});

$(function(){
    $('.clikblock').click(function(){$('html,body').animate({scrollTop:$('.stopblock').offset().top}, 500);});
    });




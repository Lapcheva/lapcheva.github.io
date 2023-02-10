$(document).ready(function() {
    $('.tabs__btn').click(function(e){
        e.preventDefault();
        const tab_id = $(this).attr('href');
        $('.tabs__btn').removeClass('active');
        $('.tabs__content').removeClass('active');
        $(this).addClass('active');
        $(tab_id).addClass('active');
    })
    $('.languages-list__link').click(function(){
        $('.languages-list__link').removeClass("active-language");
        $(this).addClass("active-language");
    });
    $('.header-links').click(function(){
        $('.header-links').removeClass("activated");
        $(this).addClass("activated");
    });
    $('.navigation__btn').click(function(){
        $('.navigation__btn').toggleClass("active-btn");
        $('.navigation__list').toggleClass("show");
    });
    $('.slide-holder').slick({
        dots: true,
        arrows: false,
        rows: 0,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
})

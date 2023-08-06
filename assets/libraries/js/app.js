// INITIALIZE AOS

AOS.init();

// SHOW HEADER WHEN WINDOW SCROLL

$(window).scroll(function() {
    if($(this).scrollTop() > 200) {
        $('.scroll-top').addClass('active');
    } else {
        $('.scroll-top').removeClass('active');
    }

    $('.scroll-top').on('click', function() {
        $(this).animate({
            scrollTop: $('html, body').scrollTop(0)
        }, 'slow');
    })

});

// HAMBURGER ANIMATION

$('.hamburger-wrapper').click(function() {
    $(this).toggleClass('active');
    $('.sidebar').toggleClass('active');
    $('.group-content').toggleClass('blur');
});

$('.group-content').click(function() {
    $('hamburger-wrapper').toggleClass('active');
    $('.sidebar').toggleClass('active');
    $('.group-content').toggleClass('blur');
})
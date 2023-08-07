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

let isSidebarActive = false;

$('.hamburger-wrapper').click(function() {
    if(!isSidebarActive) {
        $(this).addClass('active');
        $('.sidebar').addClass('active');
        $('.group-content').addClass('blur');
        isSidebarActive = true;
    } else {
        $(this).removeClass('active')
        $('.sidebar').removeClass('active');
        $('.group-content').removeClass('blur');
        isSidebarActive = false;
    }
    
});

$('.group-content').click(function() {
    if(isSidebarActive) {
        $('.hamburger-wrapper').removeClass('active');
        $('.sidebar').removeClass('active');
        $('.group-content').removeClass('blur');
    }
})

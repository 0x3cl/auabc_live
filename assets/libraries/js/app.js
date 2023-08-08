// START LOADER
startLoader();

// EXIT LOADER AFTER 3000 MILLISECONDS
setTimeout(exitLoader, 3000);

// INITIALIZE AOS
AOS.init();

function startLoader() {
    const loaders = ['.loader-primary', '.loader-secondary', '.loader-tertiary'];
    let delay = 200;

    loaders.reduce((promise, loader) => {
        return promise.then(() => {
            return new Promise(resolve => {
                setTimeout(() => {
                    $(loader).css('left', '0');
                    resolve();
                }, delay);
            });
        });
    }, Promise.resolve())
    .then(() => {
        return new Promise(resolve => {
            setTimeout(() => {
                $('.loader-content').css('left', '0');
                resolve();
            }, delay);
        });
    })
    .then(() => {
        $('.loader-content .logo-content').fadeIn(500);
        $('.loader').css('background-color', 'transparent');
    });
}

function exitLoader() {
    $('.loader-content .logo-content').fadeOut(500, () => {
        const loaders = ['.loader-tertiary', '.loader-secondary', '.loader-primary'];
        let delay = 200;

        loaders.reduce((promise, loader) => {
            return promise.then(() => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        $(loader).css('left', '100%');
                        resolve();
                    }, delay);
                });
            });
        }, Promise.resolve());
    });
}

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

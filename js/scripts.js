window.addEventListener('DOMContentLoaded', event => {

    const navbarBrand = document.body.querySelector('#logo');

    if (window.matchMedia("(max-width: 750px)").matches) {
        document.getElementById("background-video").src = "./assets/video/video-mobile.mp4";
    } else {
        document.getElementById("background-video").src = "./assets/video/video.webm";
    }

    if (window.matchMedia("(max-width: 992px)").matches) {
        document.getElementById("logo").src = "assets/img/lmns-black.svg";
    }

    // Navbar shrink function
    var navbarShrink = function (hover = false) {
        const masthead = document.body.querySelector('.masthead');
        if (window.scrollY === 0) {
            masthead.classList.remove('fadeOutUp')
            masthead.classList.add('fadeInDown')
        } else {
            masthead.classList.remove('fadeInDown')
            masthead.classList.add('fadeOutUp')
        }
        const navbarCollapsible = document.body.querySelector('.main-nav-shrink');

        // navbarBrand.src = "assets/img/lmns-black.svg";

        if (!navbarCollapsible) {
            return;
        }

        // navbarCollapsible.classList.add('navbar-shrink')
        
        if (hover === true) {
            navbarBrand.src = "assets/img/lmns-black.svg";
            navbarCollapsible.classList.add('navbar-shrink')
        }
        else if (window.scrollY === 0) {
            if (window.matchMedia("(min-width: 992px)").matches) {
                navbarBrand.src = "assets/img/lmns.svg";
            }
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarBrand.src = "assets/img/lmns-black.svg";
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('.main-nav-shrink');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '.main-nav-shrink',
            offset: 74,
        });
    };

    mainNav.addEventListener('mouseenter', function (e) {
        navbarShrink(true);
    });

    mainNav.addEventListener('mouseleave', function (e) {
        navbarShrink(false);
    });

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});

/* window.addEventListener("resize", function () {
    if (window.matchMedia("(max-width: 750px)").matches) {
        document.getElementById("background-video").src = "./assets/video/video-mobile.mp4";
    } else {
        document.getElementById("background-video").src = "./assets/video/video.webm";
    }
}) */
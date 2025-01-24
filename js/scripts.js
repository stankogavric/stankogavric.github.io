window.addEventListener('DOMContentLoaded', event => {
    if (window.matchMedia("(max-width: 750px)").matches) {
        document.getElementById("background-video").src = "./assets/video/video.mp4";
    } else {
        document.getElementById("background-video").src = "./assets/video/video.mp4";
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

        if (!navbarCollapsible) {
            return;
        }

        if (hover === true) {
            navbarCollapsible.classList.add('navbar-shrink')
        }
        else if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
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
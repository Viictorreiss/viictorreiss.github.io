window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
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
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

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

    // Bloquear todos os modals
    const modalRedirects = {
        '#portfolioModal1': 'backend.html',
        '#portfolioModal2': 'cloud.html',
        '#portfolioModal3': 'apm.html',
        '#portfolioModal4': 'container.html',
        '#portfolioModal5': 'networking.html',
        '#portfolioModal6': 'data.html'
    };

    Object.keys(modalRedirects).forEach(modalId => {
        const trigger = document.querySelector(`[data-bs-target="${modalId}"]`);
        if (trigger) {
            trigger.addEventListener('click', function (e) {
                e.preventDefault();  // Bloqueia o modal
                window.location.href = modalRedirects[modalId];
            });
        }
    });

});

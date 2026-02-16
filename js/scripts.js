/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

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
            if (!responsiveNavItem.classList.contains('dropdown-toggle')) {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        }
        });
    });

});

// Dynamic title change based on navbar click
const siteName = "Start Linux";

document.querySelectorAll('#navbarResponsive .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const sectionName = link.textContent.trim();
        document.title = `${siteName} - ${sectionName}`;
    });
});


// JS za kontakt formu
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', async function(e) {
        e.preventDefault(); // sprečava reload stranice

        // HTML5 validacija
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            const successDiv = document.getElementById('submitSuccessMessage');
            const errorDiv = document.getElementById('submitErrorMessage');

            if (response.ok) {
                // Success
                successDiv.classList.remove('d-none');
                errorDiv.classList.add('d-none');

                form.reset();
                form.classList.remove('was-validated');

                // Automatski sakrij success poruku posle 5 sekundi
                setTimeout(() => successDiv.classList.add('d-none'), 5000);
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            // Error
            const errorDiv = document.getElementById('submitErrorMessage');
            const successDiv = document.getElementById('submitSuccessMessage');

            errorDiv.classList.remove('d-none');
            successDiv.classList.add('d-none');

            // Automatski sakrij error poruku posle 5 sekundi
            setTimeout(() => errorDiv.classList.add('d-none'), 5000);
        }
    });
});




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
    if (!form) return; // <-- ako nema forme, izlazi

    form.addEventListener('submit', async function(e) {
        e.preventDefault(); // sprečava reload stranice

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        const formData = new FormData(form);
        const successDiv = document.getElementById('submitSuccessMessage');
        const errorDiv = document.getElementById('submitErrorMessage');

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {'Accept': 'application/json'}
            });

            if (response.ok) {
                successDiv.classList.remove('d-none');
                errorDiv.classList.add('d-none');
                form.reset();
                form.classList.remove('was-validated');
                setTimeout(() => successDiv.classList.add('d-none'), 5000);
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            errorDiv.classList.remove('d-none');
            successDiv.classList.add('d-none');
            setTimeout(() => errorDiv.classList.add('d-none'), 5000);
        }
    });
});




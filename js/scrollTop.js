document.querySelectorAll('a[href="#top"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // sprečava default ponašanje
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

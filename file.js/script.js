
document.addEventListener('DOMContentLoaded', function() {

    // --- Navbar Background on Scroll ---
    const navbar = document.getElementById('mainNavbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // --- Smooth Scrolling for Nav Links ---
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Hanya untuk link internal yang dimulai dengan '#'
            if (this.hash !== "") {
                e.preventDefault();
                const hash = this.hash;
                const targetElement = document.querySelector(hash);
                
                // Tutup menu mobile jika terbuka
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    navbarToggler.click();
                }

                // Scroll ke elemen target
                window.scrollTo({
                    top: targetElement.offsetTop - navbar.offsetHeight, // Offset tinggi navbar
                    behavior: 'smooth'
                });
            }
        });
    });


    // --- Animate on Scroll ---
    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% dari elemen terlihat
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Hentikan observasi setelah animasi dijalankan
            }
        });
    }, observerOptions);

    // Target semua elemen yang akan dianimasi
    const hiddenElements = document.querySelectorAll('tentang-kami.html .row, produk.html .card, kontak.html .contact-item, kontak.html form');
    hiddenElements.forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
    });

});


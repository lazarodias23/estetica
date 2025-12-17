document.addEventListener('DOMContentLoaded', () => {
    
    /* --- Menu Mobile --- */
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-link-btn');

    if(mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                // Open
                mobileMenu.classList.remove('hidden');
                // Small delay to allow display:block to apply before opacity transition
                setTimeout(() => {
                    mobileMenu.classList.remove('-translate-y-full', 'opacity-0');
                    mobileMenu.classList.add('translate-y-0', 'opacity-100');
                }, 10);
            } else {
                // Close
                mobileMenu.classList.remove('translate-y-0', 'opacity-100');
                mobileMenu.classList.add('-translate-y-full', 'opacity-0');
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300); // Match transition duration
            }
        });

        // Fechar menu ao clicar em um link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('translate-y-0', 'opacity-100');
                mobileMenu.classList.add('-translate-y-full', 'opacity-0');
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300);
            });
        });
    }

    /* --- Navbar Scroll Effect (Headroom) --- */
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        let lastScrollTop = 0;
        const delta = 5;

        window.addEventListener('scroll', () => {
            const scrollTop = Math.max(0, window.scrollY || document.documentElement.scrollTop);
            
            // 1. Estilo de Fundo (Preto Transparente ao rolar)
            if (scrollTop > 20) {
                navbar.classList.add('bg-noir-950/80', 'backdrop-blur-xl', 'border-white/10', 'shadow-lg', 'shadow-black/20', 'py-4');
                navbar.classList.remove('border-transparent', 'py-8');
            } else {
                navbar.classList.remove('bg-noir-950/80', 'backdrop-blur-xl', 'border-white/10', 'shadow-lg', 'shadow-black/20', 'py-4');
                navbar.classList.add('border-transparent', 'py-8');
            }

            // 2. Hide/Show logic
            if (Math.abs(lastScrollTop - scrollTop) <= delta) return;

            // Se o menu mobile não estiver aberto
            if (mobileMenu && mobileMenu.classList.contains('hidden')) {
                if (scrollTop > lastScrollTop && scrollTop > 100) {
                    // Scroll Down -> Hide
                    navbar.classList.add('-translate-y-full');
                } else {
                    // Scroll Up -> Show
                    navbar.classList.remove('-translate-y-full');
                }
            }
            lastScrollTop = scrollTop;
        }, { passive: true });
    }

    /* --- Fade In Animation --- */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach(el => observer.observe(el));


    /* --- Contact Form Submission --- */
    const form = document.getElementById('contact-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            const nameInput = document.getElementById('name');
            const phoneInput = document.getElementById('phone');
            
            btn.innerText = 'Enviando...';
            btn.disabled = true;
            btn.classList.add('opacity-75', 'cursor-not-allowed');

            setTimeout(() => {
                alert(`Obrigado, ${nameInput.value}! Entraremos em contato pelo número ${phoneInput.value} em breve.`);
                form.reset();
                btn.innerText = originalText;
                btn.disabled = false;
                btn.classList.remove('opacity-75', 'cursor-not-allowed');
            }, 1500);
        });
    }
});
/*----------------------------------------------------------index.html---------------------------------------------------------------- */


    (function() {
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const navLinks = document.getElementById('navLinks');
        const overlay = document.getElementById('menuOverlay');
        
        function closeMenu() {
            if (navLinks) navLinks.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
            document.body.classList.remove('menu-open');
            if (hamburgerBtn) hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
        
        function openMenu() {
            if (navLinks) navLinks.classList.add('active');
            if (overlay) overlay.classList.add('active');
            document.body.classList.add('menu-open');
            if (hamburgerBtn) hamburgerBtn.innerHTML = '<i class="fas fa-times"></i>';
        }
        
        function toggleMenu() {
            if (navLinks && navLinks.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        }
        
        if (hamburgerBtn) {
            hamburgerBtn.addEventListener('click', toggleMenu);
        }
        if (overlay) {
            overlay.addEventListener('click', closeMenu);
        }
        // Close menu when any nav link is clicked (smooth navigation)
        const allNavItems = document.querySelectorAll('.nav-link, .btn-nav');
        allNavItems.forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });
        
        // Dark mode
        const toggleDark = document.getElementById('darkModeToggle');
        if (toggleDark) {
            toggleDark.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
                const isDark = document.body.classList.contains('dark-mode');
                toggleDark.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            });
        }
        
        // Demo / pricing alerts
        document.querySelectorAll('.demo-btn').forEach(btn => {
            btn.addEventListener('click', () => alert('✨ Live demo preview (responsive mockup)'));
        });
        document.querySelectorAll('.pricing-btn').forEach(btn => {
            btn.addEventListener('click', () => alert('🚀 Get a website – pricing page (demo)'));
        });
        document.getElementById('consultBtn')?.addEventListener('click', () => alert('📅 Schedule your free consultation!'));
    })();


/*----------------------------------------------------------aboutus.html---------------------------------------------------------------- */

    (function() {
        // ========== HAMBURGER MENU LOGIC (fully responsive, matching main site) ==========
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const navLinks = document.getElementById('navLinks');
        const overlay = document.getElementById('menuOverlay');
        
        function closeMenu() {
            if (navLinks) navLinks.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
            document.body.classList.remove('menu-open');
            if (hamburgerBtn) hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
        
        function openMenu() {
            if (navLinks) navLinks.classList.add('active');
            if (overlay) overlay.classList.add('active');
            document.body.classList.add('menu-open');
            if (hamburgerBtn) hamburgerBtn.innerHTML = '<i class="fas fa-times"></i>';
        }
        
        function toggleMenu() {
            if (navLinks && navLinks.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        }
        
        if (hamburgerBtn) {
            hamburgerBtn.addEventListener('click', toggleMenu);
        }
        if (overlay) {
            overlay.addEventListener('click', closeMenu);
        }
        // Close menu when any nav link is clicked for smooth navigation
        const allNavItems = document.querySelectorAll('.nav-link, .btn-nav');
        allNavItems.forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });

        // ========== DARK MODE TOGGLE (with localStorage persistence) ==========
        const toggleDark = document.getElementById('darkModeToggle');
        const body = document.body;
        
        function setTheme(theme) {
            if (theme === 'light') {
                body.classList.remove('dark-mode');
                if (toggleDark) toggleDark.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('techThemeAbout', 'light');
            } else {
                body.classList.add('dark-mode');
                if (toggleDark) toggleDark.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('techThemeAbout', 'dark');
            }
        }
        
        const savedTheme = localStorage.getItem('techThemeAbout');
        if (savedTheme === 'dark') {
            setTheme('dark');
        } else if (savedTheme === 'light') {
            setTheme('light');
        } else {
            // default light (consistent with homepage)
            setTheme('light');
        }
        
        if (toggleDark) {
            toggleDark.addEventListener('click', () => {
                if (body.classList.contains('dark-mode')) {
                    setTheme('light');
                } else {
                    setTheme('dark');
                }
            });
        }

        // ========== CTA BUTTON NAVIGATION ==========
        const consultBtn = document.getElementById('consultBtn');
        if (consultBtn) {
            consultBtn.addEventListener('click', () => {
                window.location.href = "contactus.html";
            });
        }
    })();

/*--------------------------------------------------------------contactus.html-------------------------------------------------------------- */

    (function() {
        // ========== HAMBURGER MENU LOGIC (fully responsive) ==========
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const navLinks = document.getElementById('navLinks');
        const overlay = document.getElementById('menuOverlay');
        
        function closeMenu() {
            if (navLinks) navLinks.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
            document.body.classList.remove('menu-open');
            if (hamburgerBtn) hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
        
        function openMenu() {
            if (navLinks) navLinks.classList.add('active');
            if (overlay) overlay.classList.add('active');
            document.body.classList.add('menu-open');
            if (hamburgerBtn) hamburgerBtn.innerHTML = '<i class="fas fa-times"></i>';
        }
        
        function toggleMenu() {
            if (navLinks && navLinks.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        }
        
        if (hamburgerBtn) {
            hamburgerBtn.addEventListener('click', toggleMenu);
        }
        if (overlay) {
            overlay.addEventListener('click', closeMenu);
        }
        // Close menu when any nav link is clicked for good UX
        const allNavItems = document.querySelectorAll('.nav-link, .btn-nav');
        allNavItems.forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });

        // ========== DARK MODE TOGGLE (with localStorage persistence) ==========
        const toggleDark = document.getElementById('darkModeToggle');
        const body = document.body;
        
        function setTheme(theme) {
            if (theme === 'light') {
                body.classList.remove('dark-mode');
                if (toggleDark) toggleDark.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('techThemeContact', 'light');
            } else {
                body.classList.add('dark-mode');
                if (toggleDark) toggleDark.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('techThemeContact', 'dark');
            }
        }
        
        const savedTheme = localStorage.getItem('techThemeContact');
        if (savedTheme === 'dark') {
            setTheme('dark');
        } else if (savedTheme === 'light') {
            setTheme('light');
        } else {
            // default to light (consistent with homepage)
            setTheme('light');
        }
        
        if (toggleDark) {
            toggleDark.addEventListener('click', () => {
                if (body.classList.contains('dark-mode')) {
                    setTheme('light');
                } else {
                    setTheme('dark');
                }
            });
        }

        // ========== CONTACT FORM SUBMISSION (Formspree) ==========
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const form = e.target;
                const formData = new FormData(form);
                
                // Show loading state (optional)
                const submitBtn = form.querySelector('.btn-submit');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = 'Sending...';
                submitBtn.disabled = true;
                
                try {
                    const response = await fetch(form.action, {
                        method: 'POST',
                        body: formData,
                        headers: { 'Accept': 'application/json' }
                    });
                    
                    if (response.ok) {
                        alert('✨ Thanks for reaching out! We\'ve received your message and will get back to you within 24 hours.');
                        form.reset();
                    } else {
                        alert('❌ Something went wrong. Please try again or email us directly at solutionsfirstsoftware@gmail.com');
                    }
                } catch (error) {
                    alert('❌ Network error. Please check your connection and try again.');
                } finally {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }
            });
        }
    })();
 /*--------------------------------------------------------------work.html-------------------------------------------------------------- */       
 
    (function() {
        // ========== HAMBURGER MENU ==========
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const navLinks = document.getElementById('navLinks');
        const overlay = document.getElementById('menuOverlay');
        
        function closeMenu() {
            if (navLinks) navLinks.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
            document.body.classList.remove('menu-open');
            if (hamburgerBtn) hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
        
        function openMenu() {
            if (navLinks) navLinks.classList.add('active');
            if (overlay) overlay.classList.add('active');
            document.body.classList.add('menu-open');
            if (hamburgerBtn) hamburgerBtn.innerHTML = '<i class="fas fa-times"></i>';
        }
        
        function toggleMenu() {
            if (navLinks && navLinks.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        }
        
        if (hamburgerBtn) {
            hamburgerBtn.addEventListener('click', toggleMenu);
        }
        if (overlay) {
            overlay.addEventListener('click', closeMenu);
        }
        const allNavItems = document.querySelectorAll('.nav-link, .btn-nav');
        allNavItems.forEach(link => {
            link.addEventListener('click', () => { closeMenu(); });
        });

        // ========== DARK MODE ==========
        const toggleDark = document.getElementById('darkModeToggle');
        const body = document.body;
        
        function setTheme(theme) {
            if (theme === 'light') {
                body.classList.remove('dark-mode');
                if (toggleDark) toggleDark.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('techThemeWork', 'light');
            } else {
                body.classList.add('dark-mode');
                if (toggleDark) toggleDark.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('techThemeWork', 'dark');
            }
        }
        
        const savedTheme = localStorage.getItem('techThemeWork');
        if (savedTheme === 'dark') setTheme('dark');
        else setTheme('light');
        
        if (toggleDark) {
            toggleDark.addEventListener('click', () => {
                if (body.classList.contains('dark-mode')) setTheme('light');
                else setTheme('dark');
            });
        }

        // ========== INTERSECTION OBSERVER (fade-in) ==========
        const projectCards = document.querySelectorAll('.project-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        projectCards.forEach(card => observer.observe(card));

        // ========== FILTER FUNCTIONALITY ==========
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projects = document.querySelectorAll('.project-card');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filterValue = btn.getAttribute('data-filter');
                
                projects.forEach(project => {
                    if (filterValue === 'all' || project.getAttribute('data-category') === filterValue) {
                        project.style.display = 'flex';
                        setTimeout(() => project.classList.add('visible'), 10);
                    } else {
                        project.style.display = 'none';
                        project.classList.remove('visible');
                    }
                });
            });
        });

        // ========== DEMO BUTTONS ==========
        const demoBtns = document.querySelectorAll('.demo-btn');
        demoBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const projectName = btn.closest('.project-card')?.querySelector('h3')?.textContent || 'Project';
                alert(`✨ Opening live demo: ${projectName}\n\n(This would open the actual live website or case study in a new tab.)`);
            });
        });

        // ========== CONSULTATION BUTTON ==========
        const consultBtn = document.getElementById('consultBtn');
        if (consultBtn) {
            consultBtn.addEventListener('click', () => {
                window.location.href = "contactus.html";
            });
        }
    })();

    /*---------------------------------------------------------------service.html-------------------------------------------------------------- */
    
    (function() {
        // ========== HAMBURGER MENU LOGIC ==========
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const navLinks = document.getElementById('navLinks');
        const overlay = document.getElementById('menuOverlay');
        
        function closeMenu() {
            if (navLinks) navLinks.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
            document.body.classList.remove('menu-open');
            if (hamburgerBtn) hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
        
        function openMenu() {
            if (navLinks) navLinks.classList.add('active');
            if (overlay) overlay.classList.add('active');
            document.body.classList.add('menu-open');
            if (hamburgerBtn) hamburgerBtn.innerHTML = '<i class="fas fa-times"></i>';
        }
        
        function toggleMenu() {
            if (navLinks && navLinks.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        }
        
        if (hamburgerBtn) {
            hamburgerBtn.addEventListener('click', toggleMenu);
        }
        if (overlay) {
            overlay.addEventListener('click', closeMenu);
        }
        const allNavItems = document.querySelectorAll('.nav-link, .btn-nav');
        allNavItems.forEach(link => {
            link.addEventListener('click', () => { closeMenu(); });
        });

        // ========== DARK MODE TOGGLE (with localStorage) ==========
        const toggleDark = document.getElementById('darkModeToggle');
        const body = document.body;
        
        function setTheme(theme) {
            if (theme === 'light') {
                body.classList.remove('dark-mode');
                if (toggleDark) toggleDark.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('techThemeServices', 'light');
            } else {
                body.classList.add('dark-mode');
                if (toggleDark) toggleDark.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('techThemeServices', 'dark');
            }
        }
        
        const savedTheme = localStorage.getItem('techThemeServices');
        if (savedTheme === 'dark') {
            setTheme('dark');
        } else if (savedTheme === 'light') {
            setTheme('light');
        } else {
            setTheme('light');
        }
        
        if (toggleDark) {
            toggleDark.addEventListener('click', () => {
                if (body.classList.contains('dark-mode')) {
                    setTheme('light');
                } else {
                    setTheme('dark');
                }
            });
        }
    })();

    /*------------------------------------------------------------pricing.html-------------------------------------------------------------- */
    
    (function() {
        // ========== HAMBURGER MENU ==========
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const navLinks = document.getElementById('navLinks');
        const overlay = document.getElementById('menuOverlay');
        
        function closeMenu() {
            if (navLinks) navLinks.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
            document.body.classList.remove('menu-open');
            if (hamburgerBtn) hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
        
        function openMenu() {
            if (navLinks) navLinks.classList.add('active');
            if (overlay) overlay.classList.add('active');
            document.body.classList.add('menu-open');
            if (hamburgerBtn) hamburgerBtn.innerHTML = '<i class="fas fa-times"></i>';
        }
        
        function toggleMenu() {
            if (navLinks && navLinks.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        }
        
        if (hamburgerBtn) {
            hamburgerBtn.addEventListener('click', toggleMenu);
        }
        if (overlay) {
            overlay.addEventListener('click', closeMenu);
        }
        const allNavItems = document.querySelectorAll('.nav-link, .btn-nav');
        allNavItems.forEach(link => {
            link.addEventListener('click', () => { closeMenu(); });
        });

        // ========== DARK MODE ==========
        const toggleDark = document.getElementById('darkModeToggle');
        const body = document.body;
        
        function setTheme(theme) {
            if (theme === 'light') {
                body.classList.remove('dark-mode');
                if (toggleDark) toggleDark.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('techThemePricing', 'light');
            } else {
                body.classList.add('dark-mode');
                if (toggleDark) toggleDark.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('techThemePricing', 'dark');
            }
        }
        
        const savedTheme = localStorage.getItem('techThemePricing');
        if (savedTheme === 'dark') setTheme('dark');
        else setTheme('light');
        
        if (toggleDark) {
            toggleDark.addEventListener('click', () => {
                if (body.classList.contains('dark-mode')) setTheme('light');
                else setTheme('dark');
            });
        }

        // ========== GET STARTED BUTTONS ==========
        const getStartedBtns = document.querySelectorAll('.btn-get-started');
        getStartedBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const plan = btn.getAttribute('data-plan') || 'selected plan';
                alert(`✨ Thank you for your interest in the ${plan} plan!\n\nOur team will contact you within 24 hours to discuss next steps.`);
            });
        });

        // ========== ENTERPRISE LINK ==========
        const enterpriseLink = document.getElementById('enterpriseLink');
        if (enterpriseLink) {
            enterpriseLink.addEventListener('click', (e) => {
                e.preventDefault();
                alert("📞 For enterprise custom solutions, please email us at solutionsfirstsoftware@gmail.com or call +27 505 4974.\n\nWe'll get back to you within 24 hours with a tailored quote.");
            });
        }

        // ========== CONSULTATION BUTTON ==========
        const consultBtn = document.getElementById('consultBtn');
        if (consultBtn) {
            consultBtn.addEventListener('click', () => {
                window.location.href = "contactus.html";
            });
        }
    })();

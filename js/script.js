// Défilement fluide des liens de navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Animation de particules
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Intersection Observer pour les animations en fondu
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observez tous les éléments en fondu
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Arrière-plan de la barre de navigation lors du défilement
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0.9)';
            }
        });

        // Effet de frappe pour les sous-titres
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        // Initialiser les animations lors du chargement de la page
        window.addEventListener('load', function() {
            createParticles();
            
            // Effet de démarrage de la saisie du texte sous le titre après un délai
            setTimeout(() => {
                const subtitle = document.querySelector('.neon-subtitle');
                if (subtitle) {
                    const originalText = subtitle.textContent;
                    typeWriter(subtitle, originalText, 80);
                }
            }, 1000);
        });

        // Animation des barres de compétences
        function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.transition = 'width 2s ease-in-out';
                    bar.style.width = width;
                }, 500);
            });
        }

        // Déclencher l'animation des barres de compétences 
        // lorsque la section des compétences est visible
        const skillsSection = document.getElementById('skills');
        const skillsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    skillsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        if (skillsSection) {
            skillsObserver.observe(skillsSection);
        }

        // Effets de survol des éléments du portfolio
        document.querySelectorAll('.portfolio-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05) rotateY(5deg)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotateY(0deg)';
            });
        });

        // Form submission
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const button = this.querySelector('button[type="submit"]');
            const originalText = button.innerHTML;
            
            button.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Envoi en cours...';
            button.disabled = true;
            
            setTimeout(() => {
                button.innerHTML = '<i class="fas fa-check me-2"></i>Message Envoyé!';
                button.style.backgroundColor = 'var(--accent-neon)';
                
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.disabled = false;
                    button.style.backgroundColor = '';
                    this.reset();
                }, 2000);
            }, 2000);
        });

        // Add glitch effect to title on hover
        const title = document.querySelector('.neon-title');
        if (title) {
            title.addEventListener('mouseenter', function() {
                this.style.animation = 'glowPulse 0.1s ease-in-out 10 alternate';
            });
            
            title.addEventListener('mouseleave', function() {
                this.style.animation = 'glowPulse 2s ease-in-out infinite alternate';
            });
        }

        // Random twinkling effect for particles
        setInterval(() => {
            const particles = document.querySelectorAll('.particle');
            const randomParticle = particles[Math.floor(Math.random() * particles.length)];
            if (randomParticle) {
                randomParticle.style.boxShadow = '0 0 20px var(--primary-neon)';
                setTimeout(() => {
                    randomParticle.style.boxShadow = '';
                }, 500);
            }
        }, 1000);


// --- Affichage exclusif d'une section par navigation, scroll titre toujours visible ---
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


// --- Firework Effect on Navbar Clicks (Always visible on viewport) ---

function hexColorRandom() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 90%, 60%)`;
}

function launchFireworkViewport(element) {
    // Centre sur le bouton NAV VISIBLE à l'écran, pas dans la page
    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const numParticles = 32;
    const minDist = 80, maxDist = 180;
    for (let i = 0; i < numParticles; i++) {
        const angle = (2 * Math.PI / numParticles) * i;
        const dist = minDist + Math.random() * (maxDist - minDist);
        const dx = Math.cos(angle) * dist;
        const dy = Math.sin(angle) * dist;

        const particle = document.createElement('div');
        particle.className = 'firework-particle';
        particle.style.background = hexColorRandom();
        particle.style.left = x - 4 + 'px';
        particle.style.top = y - 4 + 'px';
        particle.style.transform = `translate(0px,0px) scale(${0.7 + Math.random()*0.6})`;

        // Important : use fixed for overlay on all page (already in CSS)
        document.body.appendChild(particle);

        setTimeout(() => {
            particle.style.transition = 'transform 0.8s cubic-bezier(.23,2,.6,.99), opacity 0.7s';
            particle.style.transform = `translate(${dx}px,${dy}px) scale(0.6)`;
            particle.style.opacity = '0';
        }, 10);

        setTimeout(() => particle.remove(), 1000);
    }
}

// Ajoute le listener sur CHAQUE onglet nav
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        launchFireworkViewport(this);
    });
});


// Montrer/Masquer le bouton retour haut
window.addEventListener('scroll', function() {
    const btn = document.getElementById('scrollTopBtn');
    btn.style.display = (window.scrollY > 200) ? 'block' : 'none';
});

// Fonction scroll progressif
function scrollToTopStepByStep() {
    // Récupère les sections du haut vers le bas
    const allSections = Array.from(document.querySelectorAll('section')).filter(sec => sec.offsetParent !== null);
    if (!allSections.length) {
        window.scrollTo({top:0, behavior:'smooth'});
        return;
    }
    // Triées par position Y croissante
    allSections.sort((a,b)=>a.getBoundingClientRect().top - b.getBoundingClientRect().top);
    // Ajoute le body (ou #home) en tout début
    if (allSections[0].id !== 'home' && document.getElementById('home')) {
        allSections.unshift(document.getElementById('home'));
    }

    let i = allSections.length - 1; // Commencer du plus bas
    function step() {
        if (i < 0) return;
        allSections[i].scrollIntoView({behavior:'smooth', block:'start'});
        i--;
        if (i >= 0) setTimeout(step, 4000);
    }
    step();
}

document.getElementById('scrollTopBtn').addEventListener('click', scrollToTopStepByStep);

    

    
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = this;
  const data = new FormData(form);

  // Feedback bouton (facultatif)
  const btn = form.querySelector('button[type="submit"]');
  const btnOriginal = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Envoi...';

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      btn.innerHTML = '<i class="fas fa-check me-2"></i>Message envoyé ! Je vous répondrai sous 48 heures maximum';
      btn.classList.add('bg-success');
      setTimeout(() => {
        btn.innerHTML = btnOriginal;
        btn.disabled = false;
        btn.classList.remove('bg-success');
        form.reset();
      }, 2000);
    } else {
      btn.innerHTML = '<i class="fas fa-times me-2"></i>Erreur!';
      btn.classList.add('bg-danger');
      setTimeout(() => {
        btn.innerHTML = btnOriginal;
        btn.disabled = false;
        btn.classList.remove('bg-danger');
      }, 3000);
    }
  } catch (err) {
    btn.innerHTML = '<i class="fas fa-times me-2"></i>Erreur réseau!';
    btn.classList.add('bg-danger');
    setTimeout(() => {
      btn.innerHTML = btnOriginal;
      btn.disabled = false;
      btn.classList.remove('bg-danger');
    }, 3000);
  }
});



    // Modal Portfolio - show big image and caption
document.querySelectorAll('.portfolio-detail-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const img = btn.getAttribute('data-img');
    const caption = btn.getAttribute('data-caption');
    document.getElementById('modalImage').src = img;
    document.getElementById('modalImage').alt = caption;
    document.getElementById('modalCaption').textContent = caption;
    const modal = new bootstrap.Modal(document.getElementById('portfolioModal'));
    modal.show();
  });
});




// JS pour navigation mobile Bootstrap 5, version scrollable
// Fermer le menu mobile après clic sur un lien
document.querySelectorAll('.navbar-collapse .nav-link').forEach(link => {
  link.addEventListener('click', function () {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    // Si le menu est ouvert sur mobile, referme-le (Bootstrap 5)
    if (navbarCollapse.classList.contains('show')) {
      const collapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
      collapse.hide();
    }
  });
});

// Optionnel : Smooth scroll (déjà dans ton code)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Barre de progression scroll dynamique
(function() {
  const bar = document.getElementById('scroll-progress-bar');
  function updateBar() {
    const scrollY = window.scrollY || window.pageYOffset;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = docH > 0 ? (scrollY / docH) * 100 : 0;
    bar.style.width = scrolled + "%";
  }
  window.addEventListener('scroll', updateBar, {passive:true});
  window.addEventListener('resize', updateBar);
  document.addEventListener('DOMContentLoaded', updateBar);
})();


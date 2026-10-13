/**
 * PORTFOLIO - ABOUBACAR SOUMAHORO
 * Technicien Support Informatique & Développeur Web
 * Fichier JavaScript interactif principal
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialisation de l'année dans le copyright
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // 2. Gestion de la barre de navigation au défilement (scrolled state)
  const navbar = document.querySelector('.navbar-custom');
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    // Gestion de l'apparition du bouton retour en haut
    if (window.scrollY > 400) {
      scrollToTopBtn?.classList.add('show');
    } else {
      scrollToTopBtn?.classList.remove('show');
    }
  });

  // 3. Clic bouton retour en haut
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 4. Fermeture automatique du menu burger mobile lors d'un clic sur un lien d'ancrage
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.getElementById('navbarNav');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // 5. Gestion interactive du formulaire de contact (Simulation d'envoi & Feedback utilisateur)
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('userName');
      const emailInput = document.getElementById('userEmail');
      const messageInput = document.getElementById('userMessage');
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      // Validation basique
      if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        showFeedback("Veuillez renseigner tous les champs obligatoires.", "danger");
        return;
      }

      // Simulation de chargement
      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Envoi en cours...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
        contactForm.reset();

        showFeedback("Merci pour votre message ! Aboubacar Soumahoro vous répondra dans les plus brefs délais.", "success");
      }, 1200);
    });
  }

  function showFeedback(message, type) {
    if (!formFeedback) return;
    formFeedback.className = `alert alert-${type} mt-3 mb-0 d-flex align-items-center gap-2 fade show`;
    formFeedback.innerHTML = `
      <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
      <div>${message}</div>
    `;
    formFeedback.classList.remove('d-none');

    // Disparition automatique après 6 secondes
    setTimeout(() => {
      formFeedback.classList.add('d-none');
    }, 6000);
  }

  // 6. Petit message de bienvenue en console façon SysAdmin / Dev
  console.log(
    `%c[AS.tech] Système Initialisé - Aboubacar Soumahoro Portfolio v2026\n%cSupport IT (N1/N2) & Intégrateur Web prêts.`,
    'color: #38bdf8; font-weight: bold; font-size: 14px;',
    'color: #94a3b8; font-size: 12px;'
  );
});

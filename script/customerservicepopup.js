  const overlay = document.getElementById('supportOverlay');
  const openBtn = document.querySelector('.contact-customer-service');
  const closeBtn = document.querySelector('.support-close');

  function openOverlay() {
    // Scroll page to a safe position first
    window.scrollTo({
      top: 400,
      left: 0,
      behavior: 'smooth'
    });

    setTimeout(() => {
      overlay.classList.remove('hidden');
      
    }, 150);
  }

  function closeOverlay() {
    overlay.classList.add('hidden');
    document.body.style.overflow = ''; // restore background scroll
  }

  openBtn?.addEventListener('click', openOverlay);
  closeBtn?.addEventListener('click', closeOverlay);

  overlay.addEventListener('click', e => {
    if (e.target === overlay) {
      closeOverlay();
    }
  });
  const toggleButtons = document.querySelectorAll('.mobile-nav_toggle');
  const mobileMenu = document.querySelector('.mobile-nav_menu');

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');

      // reset all toggle buttons to hamburger when closed
      toggleButtons.forEach(b => {
        b.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
      });
    });
  });

  // optional: close menu when clicking a link
  document.querySelectorAll('.mobile-nav_menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      toggleButtons.forEach(b => (b.textContent = '☰'));
    });
  });
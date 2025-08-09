document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

 menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-bars');
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
  console.log("Menu toggled", navbar.classList);
};


  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');

  window.addEventListener('scroll', () => {
    let top = window.scrollY;
    sections.forEach(sec => {
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
        let activeLink = document.querySelector('header nav a[href="#' + id + '"]');
        if (activeLink) activeLink.classList.add('active');
      }
    });
    document.querySelector('.header').classList.toggle('sticky', window.scrollY > 100);
  });

  // Optional: ScrollReveal Animations (if you included the library)
  if (window.ScrollReveal) {
    ScrollReveal({
      distance: "80px",
      duration: 2000,
      delay: 200,
      reset: true,
    });
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.about-img', { origin: 'left' });
    ScrollReveal().reveal('.about-content', { origin: 'right' });
  }
});

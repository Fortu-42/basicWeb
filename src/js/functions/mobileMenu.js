const init = () => {
  const hamburger = document.getElementById('hamburger-menu-icon');
  const mobileMenu = document.getElementById('mobile-menu-top');
  const menuLinks = document.getElementsByClassName('mobile-menu-link');

  hamburger.addEventListener('click', function (e) {
    e.preventDefault();
    hamburger.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
  });

  for (let menuLink of menuLinks) {
    menuLink.addEventListener('click', function (e) {
      hamburger.classList.remove('is-active');
      mobileMenu.classList.remove('is-active');
    });
  }

  // menuLinks.forEach((menuLink) => {
  //
  // });
};

export default {
  init,
};

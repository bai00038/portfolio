const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile_menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.querySelectorAll('.mobile_menu a').forEach(link => {
  link.addEventListener('click', (e) => {
    const menu = document.querySelector('.mobile_menu');
    if (menu.classList.contains('active')) {
      setTimeout(() => {
        menu.classList.remove('active');
      }, 100);
    }
  });
});

document.addEventListener("click", function (e) {
  const mobileMenu = document.querySelector(".mobile_menu");
  const hamburger = document.querySelector(".hamburger");

  if (
    mobileMenu.classList.contains("active") &&
    !mobileMenu.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    mobileMenu.classList.remove("active");
  }
});
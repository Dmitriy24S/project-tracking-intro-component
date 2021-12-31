const menuIcon = document.querySelector(".hamburger-menu-icon");
const navMenu = document.querySelector(".nav-menu");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

//Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Close hamburger menu when a link is clicked

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});




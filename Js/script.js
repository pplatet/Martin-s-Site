const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton?.addEventListener("click", () => {
  document.body.classList.add("show-mobile-menu");
});

menuCloseButton?.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-menu");
});

// Close menu when any nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
  });
});

//INITIALIZE SWIPER
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor:true,
  spacebetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true, 
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //Responsive Breakpoints
  breakpoints:{
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

const header = document.querySelector("header");

//Trigger Glass Effect
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

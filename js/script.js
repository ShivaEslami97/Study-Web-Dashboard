////// Date picker
const today = new Date().setHours(0, 0, 0, 0);
const defaultOptions = {
  defaultViewDate: today,
  nextArrow: '<i class="fa-solid fa-angle-right"></i>',
  prevArrow: '<i class="fa-solid fa-angle-left"></i>',
};
console.log(today);
const elem = document.getElementById("inline");
const datepicker = new Datepicker(elem, defaultOptions);

////// sticky menu
var header = document.getElementById("header");
var sticky = header.offsetTop;
function myFunction() {
  if (window.scrollY >= 50) {
    header.classList.add("is-sticky");
  } else {
    header.classList.remove("is-sticky");
  }
}
// document.addEventListener("scroll", () => {
//     /// sticky menu
//     myFunction();
// });

// menu tabs
const navLink = document.querySelectorAll(".nav__link");
navLink.forEach((item, index) => {
  item.addEventListener("click", function (e) {
    console.log(item);
    navLink.forEach((navItem) => {
      navItem.classList.remove("active");
    });
    item.classList.add("active");
  });
});

// Homework Progress
const progressItem = document.querySelectorAll(".progress__item");

progressItem.forEach((item, index) => {
  item.addEventListener("click", function (e) {
    progressItem.forEach((progress) => {
      progress.classList.remove("progress--active");
    });
    item.classList.add("progress--active");
  });
});

///// mobile menu
const menu = document.querySelector(".nav");
const menuTrigger = document.querySelector(".header__mobile-btn");
const menuClosed = document.querySelector(".menu-mobile-close");

function toggleMenu() {
  menu.classList.toggle("active");
  menuOverlay.classList.toggle("active");
}

menuTrigger.addEventListener("click", () => {
  toggleMenu();
});
menuClosed.addEventListener("click", () => {
  toggleMenu();
});

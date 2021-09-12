// modal

let detailsBtn = document.querySelector(".contact-form");
let modal = document.querySelector(".modal");

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

detailsBtn.addEventListener("click", function (e) {
  modal.classList.add("show");
  modal.classList.remove("hide");
});

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

// mobile menu

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active-menu");
  if (mobileMenu.classList.contains("active-menu")) {
    mainMenu.classList.add("active-menu");
  } else {
    mainMenu.classList.remove("active-menu");
  }
});

// slider

new Splide(".splide").mount();

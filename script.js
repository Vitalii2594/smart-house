// Heaader
(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");
    const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body);
  };
  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

// TABS
const tabsBtns = document.querySelectorAll(".tabs__nav button");
const tabsItems = document.querySelectorAll(".tabs__item");

// Ф-я скрывает табы и убирает active у кнопок
function hideTabs() {
  tabsItems.forEach((item) => item.classList.add("hide"));
  tabsBtns.forEach((item) => item.classList.remove("active"));
}

// Ф-я показывает переданный номер таба и делает соответствующую ему кнопку активной.
function showTab(index) {
  tabsItems[index].classList.remove("hide");
  tabsBtns[index].classList.add("active");
}

hideTabs();
showTab(0);

tabsBtns.forEach((btn, index) =>
  btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
  })
);

// Anchors
const anchors = document.querySelectorAll(".header__nav a");

anchors.forEach((anc) => {
  anc.addEventListener("click", function (event) {
    event.preventDefault();

    const id = anc.getAttribute("href");
    const elem = document.querySelector(id);

    window.scroll({
      top: elem.offsetTop - 80,
      behavior: "smooth",
    });
  });
});

document.querySelector(".burger-menu").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".header__nav").classList.toggle("show");
});



// About us

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalDescription = document.getElementById('modal-description');
  const closeButton = document.querySelector('.close-button');

  document.querySelectorAll('.about__card').forEach(card => {
    card.addEventListener('click', () => {
      modalDescription.textContent = card.getAttribute('data-description');
      modal.style.display = 'block';
    });
  });

  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});




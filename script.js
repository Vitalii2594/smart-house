// Heaader
const modal = document.querySelector('.header_navigation_window');
const closeButton = document.querySelector('.burger_icon_close');
const burgerButton = document.querySelector('.button_burger');


if (!modal.classList.contains('to_close')) {
  modal.classList.add('to_close');
}

closeButton.addEventListener('click', function () {
  modal.classList.add('to_close');
});

burgerButton.addEventListener('click', function () {
  modal.classList.remove('to_close');
});




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

document.querySelector('.burger-menu').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.header__nav').classList.toggle('show');
});

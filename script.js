// Obsługa kliknięcia burger menu
document.querySelector('.burger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.burger-menu-overlay').classList.toggle('active');
});

// Obsługa kliknięcia przycisku zamknięcia
document.querySelector('.close-btn').addEventListener('click', function() {
  document.querySelector('.burger').classList.remove('active');
  document.querySelector('.burger-menu-overlay').classList.remove('active');
});

// Zamknięcie menu po kliknięciu w link
document.querySelectorAll('.burger-menu ul li a').forEach(link => {
  link.addEventListener('click', function() {
      document.querySelector('.burger').classList.remove('active');
      document.querySelector('.burger-menu-overlay').classList.remove('active');
  });
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

document.querySelector(".burger-menu").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".header__nav").classList.toggle("show");
});

// About us

function openModal(element) {
  var description = element.getAttribute("data-description");
  document.getElementById("modal-description").textContent = description;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

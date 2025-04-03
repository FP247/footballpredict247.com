const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

[openMenuBtn, closeMenuBtn].forEach((btn) => {
  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
});

menu.addEventListener("transitionend", function(){
  this.removeAttribute("style");
});

menu.querySelectorAll(".dropdown > svg ").forEach((arrow) => {
  arrow.addEventListener("click", function(){
    this.closest(".dropdown").classList.toggle("active");
  
  });
});


document.addEventListener("click", e => {
  const isDropdownButton =e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  let currrentDropdown
  if (isDropdownButton) {
    currrentDropdown= e.target.closest("[data-dropdown]")
    currrentDropdown.classList.toggle("active")
  }
  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currrentDropdown) return
    dropdown.classList.remove("active")
  })
})

// get current year
const currentYearElement = document.querySelector("#year");
const currentYear = new Date().getFullYear();
currentYearElement.innerHTML = `&copy;${currentYear} Lalaine Macababbad`;

// get last modified date
const lastModifiedElement = document.querySelector("#lastModified");
const lastModified = document.lastModified;
lastModifiedElement.textContent = `Last Modified: ${lastModified}`;

// hamburger menu
const hamburgerMenu = document.querySelector("#hamburger_menu");
const navigation = document.querySelector(".navigation");

hamburgerMenu.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamburgerMenu.classList.toggle("open");
});

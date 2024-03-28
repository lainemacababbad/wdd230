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

// weather

// json file
document.addEventListener("DOMContentLoaded", function() {
  const companyInfoContainer = document.getElementById("company-info");

  fetch("data/members.json")
    .then(response => response.json())
    .then(data => {
      const companies = data.companies;

      // Generate HTML for each company card
      const companyCardsHTML = companies.map(company => `
        <div class="company">
          <img src="/chamber/images/${company.image}" alt="${company.name}">
          <h3>${company.name}</h3>
          <p>Address: ${company.address}</p>
          <p>Phone: ${company.phone}</p>
          <a href="${company.website}">Website</a>
          <p>Membership Level: ${company.membership_level}</p>
          <p>${company.other_information}</p>
        </div>
      `).join("");

      // Insert generated HTML into the container
      companyInfoContainer.innerHTML = companyCardsHTML;
    })
    .catch(error => console.error('Error fetching data:', error));
});

// grid and list

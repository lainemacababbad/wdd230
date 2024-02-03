// get current year
const currentYearElement = document.querySelector('#year');
const currentYear = new Date().getFullYear();
currentYearElement.innerHTML = `&copy;${currentYear} Lalaine Macababbad | PH CA 🇵🇭🇨🇦`;

// get last modified date
const lastModifiedElement = document.querySelector('#lastModified');
const lastModified = document.lastModified;
lastModifiedElement.textContent = `Last Modified: ${lastModified}`;

// hamburger menu
const hamburgerMenu = document.querySelector('#hamburger_menu');
const navigation = document.querySelector('.navigation');

hamburgerMenu.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamburgerMenu.classList.toggle('open');
});

// dark more
const modeButton = document.querySelector("#dark_mode");
const main = document.querySelector("main");
const cards = document.querySelectorAll(".card");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#1f1f1f";
		main.style.color = "#c9d1c4";
		main.style.boxShadow = "none";
		cards.forEach(card => {
			card.style.boxShadow = "none";
		  });
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#cad2c5";
		main.style.color = "#000";
		cards.forEach(card => {
			card.style.boxShadow = "10px 10px 5px #2f3e46";
		  });
		modeButton.textContent = "🕶️";
	}
});

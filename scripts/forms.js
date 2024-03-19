// START OF JS FOR FORM
// password
const p1 = document.querySelector("#password");
const p2 = document.querySelector("#password2");
const message = document.querySelector("#passwordmessage");

p2.addEventListener("focusout", controlar);

function controlar() {
	if (p1.value !== p2.value) {
		p1.value =""
        p2.value=""
        p1.focus()
        message.textContent = "Password Do Not Match. Please try again."
	} else {
		message.textContent=""
	}
}

// range
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}
// END OF JS
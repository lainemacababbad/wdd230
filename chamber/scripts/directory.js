const url = "data/members.json"; // Adjust the URL to point to your JSON file
const companiesContainer = document.getElementById('companies');

async function getCompanyData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.companies);
  } catch (error) {
    console.error('Error fetching companies:', error);
  }
}

getCompanyData(url);

const displayCompanies = (companies) => {
  companies.forEach((company) => {
    let companyDiv = document.createElement('section');
    companyDiv.classList.add('company');

    // Create elements for member information
    let nameElement = document.createElement('h2');
    let addressElement = document.createElement('p');
    let phoneElement = document.createElement('p');
    let websiteElement = document.createElement('p');
    let membershipElement = document.createElement('p');
    let otherInfoElement = document.createElement('p'); // change this
    let imageElement = document.createElement('img');

    // Assign text content and attributes
    nameElement.textContent = company.name;
    addressElement.textContent = `Address: ${company.address}`;
    phoneElement.textContent = `Phone: ${company.phone}`;
    websiteElement.innerHTML = `Website: <a href="${company.website}" target="_blank">${company.website}</a>`;
    membershipElement.textContent = `Membership Level: ${company.membership_level}`;
    membershipElement.classList.add('membership-level');
    otherInfoElement.textContent = `Other Information: ${company.other_information}`;
    otherInfoElement.classList.add('other');
    imageElement.src = `${company.image}`;
    imageElement.alt = `${company.name} Logo`;
    imageElement.width = "100";

    // Append elements to memberDiv
    memberDiv.appendChild(nameElement);
    memberDiv.appendChild(addressElement);
    memberDiv.appendChild(phoneElement);
    memberDiv.appendChild(websiteElement);
    memberDiv.appendChild(membershipElement);
    memberDiv.appendChild(otherInfoElement);
    memberDiv.appendChild(imageElement);

    // Append memberDiv to membersContainer
    membersContainer.appendChild(memberDiv);
  });
};


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#members");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
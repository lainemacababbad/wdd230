const url = "data/members.json"; // Adjust the URL to point to your JSON file
const membersContainer = document.getElementById('members');

async function getMemberData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error('Error fetching members:', error);
  }
}

getMemberData(url);

const displayMembers = (members) => {
  members.forEach((member) => {
    let memberDiv = document.createElement('section');
    memberDiv.classList.add('member');

    // Create elements for member information
    let nameElement = document.createElement('h2');
    let addressElement = document.createElement('p');
    let phoneElement = document.createElement('p');
    let websiteElement = document.createElement('p');
    let membershipElement = document.createElement('p');
    let otherInfoElement = document.createElement('p');
    let imageElement = document.createElement('img');

    // Assign text content and attributes
    nameElement.textContent = member.name;
    addressElement.textContent = `Address: ${member.address}`;
    phoneElement.textContent = `Phone: ${member.phone}`;
    websiteElement.innerHTML = `Website:<a href="${member.website}" target="_blank">${member.website}</a>`;
    websiteElement.classList.add('website');
    membershipElement.textContent = `Membership Level: ${member.membership_level}`;
    membershipElement.classList.add('membership-level');
    otherInfoElement.textContent = `Other Information: ${member.other_information}`;
    otherInfoElement.classList.add('other');
    imageElement.src = `${member.image}`;
    imageElement.alt = `${member.name} Logo`;
    imageElement.width = "100";
    imageElement.classList.add('images');

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
const membersContainer = document.getElementById('members');
const display = document.querySelector("article");

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    displayMembers(data.members); // Process the data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData('data/members.json');

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

    // Assign text content and attributes
    nameElement.textContent = member.name;
    addressElement.textContent = `Address: ${member.address}`;
    phoneElement.textContent = `Phone: ${member.phone}`;
    websiteElement.innerHTML = `Website: <a href="${member.website}" target="_blank">${member.website}</a>`;
    websiteElement.classList.add('website');
    membershipElement.textContent = `Membership Level: ${member.membership_level}`;
    membershipElement.classList.add('membership-level');
    otherInfoElement.textContent = `Other Information: ${member.other_information}`;
    otherInfoElement.classList.add('other');

    // Append elements to memberDiv
    memberDiv.appendChild(nameElement);
    memberDiv.appendChild(addressElement);
    memberDiv.appendChild(phoneElement);
    memberDiv.appendChild(websiteElement);
    memberDiv.appendChild(membershipElement);
    memberDiv.appendChild(otherInfoElement);

    // Append memberDiv to membersContainer
    membersContainer.appendChild(memberDiv);
  });
};

// Function to switch to grid view
const switchToGridView = () => {
  display.classList.add('grid');
  display.classList.remove('list');
};

// Function to switch to list view
const switchToListView = () => {
  display.classList.remove('grid');
  display.classList.add('list');
};

// Event listeners for grid and list buttons
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", switchToGridView);
listButton.addEventListener("click", switchToListView);

// Function to select random items from an array
function getRandomItems(array, numItems) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numItems);
}

// Function to fetch and display spotlight members
async function fetchAndDisplaySpotlightMembers() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        
        // Filter members with silver or gold status
        const spotlightMembers = data.members.filter(member => member.membership_level === 'Silver' || member.membership_level === 'Gold');
        
        // Randomly select 2 or 3 members
        const numMembersToShow = Math.floor(Math.random() * 2) + 2; // Randomly choose 2 or 3 members
        const selectedMembers = getRandomItems(spotlightMembers, numMembersToShow);
        
        // Display selected members
        const spotlightContainer = document.getElementById('spotlight-container');
        spotlightContainer.innerHTML = ''; // Clear previous content
        
        selectedMembers.forEach(member => {
            const memberElement = document.createElement('div');
            memberElement.innerHTML = `
                <p>Company Name: ${member.name}</p>
                <p>Membership Status: ${member.membership_level}</p>
            `;
            spotlightContainer.appendChild(memberElement);
        });
    } catch (error) {
        console.error('Error fetching or displaying spotlight members:', error);
    }
}

// Call fetchAndDisplaySpotlightMembers when the page loads
window.onload = fetchAndDisplaySpotlightMembers;
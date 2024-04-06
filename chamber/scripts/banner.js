// Function to check if today is Monday, Tuesday, or Wednesday
function isWeekday() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
  return dayOfWeek >= 1 && dayOfWeek <= 3; // Monday, Tuesday, or Wednesday
}

// Function to show or hide the banner based on the day of the week
function toggleChamberBanner() {
  const banner = document.getElementById("chamber-banner");
  if (isWeekday()) {
    banner.style.display = "block";
  } else {
    banner.style.display = "none";
  }
}

// Event listener for closing the banner
document.querySelector(".banner__close").addEventListener("click", function () {
  document.getElementById("chamber-banner").style.display = "none";
});

// Call toggleChamberBanner initially to show or hide the banner based on the day of the week
toggleChamberBanner();

// JavaScript to set the timestamp value when the page loads
window.addEventListener('DOMContentLoaded', function() {
    var timestamp = new Date().toISOString();
    document.getElementById("timestamp").value = timestamp;
    document.getElementById("timestamp-display").textContent = "Form loaded at: " + timestamp;
});
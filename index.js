// --- Welcome alert when page loads ---
window.addEventListener("load", function () {
    console.log("Website Loaded Successfully!");
});

// --- Smooth scrolling for all internal nav links ---
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetID = this.getAttribute("href");
        const targetSection = document.querySelector(targetID);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// --- Button Click Alerts ---
function showAction(message) {
    alert(message);
}

// Get Started Button
const getStarted = document.querySelector('a[href="Get started.html"]');
if (getStarted) {
    getStarted.addEventListener("click", () => {
        showAction("Redirecting to Get Started page...");
    });
}

// Boost Healthy Button
const boostHealthy = document.querySelector('a[href="About us.html"]');
if (boostHealthy) {
    boostHealthy.addEventListener("click", () => {
        showAction("Opening About Us page...");
    });
}

// Go Home Button
const goHome = document.querySelector('a[href="index.html"].btn-success');
if (goHome) {
    goHome.addEventListener("click", () => {
        showAction("Returning to Home Page...");
    });
}

// --- Simple Search Button Action ---
const searchButton = document.querySelector("button[type='submit']");
if (searchButton) {
    searchButton.addEventListener("click", () => {
        alert("Search functionality coming soon!");
    });
}

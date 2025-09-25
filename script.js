// Select the buttons
const learnMoreButton = document.getElementById('learnMoreButton');
const homeButton = document.getElementById('homeButton');

// Function to navigate to a specific section
function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add event listeners to the buttons
if (learnMoreButton) {
    learnMoreButton.addEventListener('click', () => navigateToSection('home'));
}

if (homeButton) {
    homeButton.addEventListener('click', () => navigateToSection('home'));
}
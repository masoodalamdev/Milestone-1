// Function to toggle the visibility of the skills section
const toggleSkills = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
};

// Adding event listener to the button
const button = document.getElementById('toggle-skills');
if (button) {
    button.addEventListener('click', toggleSkills);
}

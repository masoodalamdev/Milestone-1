// Function to toggle the visibility of the skills section
var toggleSkills = function () {
    var skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
};
// Adding event listener to the button
var button = document.getElementById('toggle-skills');
if (button) {
    button.addEventListener('click', toggleSkills);
}

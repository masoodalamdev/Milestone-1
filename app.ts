const toggleSkills = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
};

const button = document.getElementById('toggle-skills');
if (button) {
    button.addEventListener('click', toggleSkills);
}

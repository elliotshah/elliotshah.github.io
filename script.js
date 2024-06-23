document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('search-input').addEventListener('keyup', function () {
    const query = this.value.toLowerCase();
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionText = section.textContent.toLowerCase();
        if (sectionText.includes(query)) {
            section.style.display = '';
        } else {
            section.style.display = 'none';
        }
    });
});

function navFunction(sectionId) {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth' // Smooth scrolling effect
    });
}

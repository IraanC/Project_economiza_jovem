/* js/aulas.js */
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-section');
    let currentSectionIndex = 0;

    const updateSectionVisibility = () => {
        sections.forEach((section, index) => {
            section.style.display = index === currentSectionIndex ? 'block' : 'none';
        });
    };

    sections.forEach((section, index) => {
        const nextButton = section.querySelector('#next-' + (index + 1));
        const prevButton = section.querySelector('#prev-' + (index + 1));

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
                updateSectionVisibility();
            });
        }

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
                updateSectionVisibility();
            });
        }
    });

    // Inicializa a visibilidade das seções
    updateSectionVisibility();
});

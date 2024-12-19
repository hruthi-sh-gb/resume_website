console.log("Website loaded successfully!");

const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const icon = link.querySelector('.social-icon');
        icon.style.transform = "scale(1.1)";
    });
    link.addEventListener('mouseleave', () => {
        const icon = link.querySelector('.social-icon');
        icon.style.transform = "scale(1)";
    });
    link.addEventListener('click', (e) => {
        const platformName = e.currentTarget.getAttribute('data-name');
        console.log(`User clicked on ${platformName}`);
    });
});

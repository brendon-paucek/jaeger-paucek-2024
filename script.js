// Add this to your "script.js" file

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    navLinks.forEach((link, index) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            sections.forEach((section) => section.classList.remove("active"));
            sections[index].classList.add("active");
        });
    });
});

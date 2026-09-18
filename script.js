// =========================================================
// MENU MOBILE
// =========================================================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }
});


// Fecha o menu ao clicar em um link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuButton.textContent = "☰";

    });

});


// =========================================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// =========================================================

const elementsToReveal = document.querySelectorAll(
    ".section-heading, .intro-grid, .tech-card, .server-content, .timeline-item, .legacy-grid, .legacy-quote, .final-content"
);

elementsToReveal.forEach(element => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


elementsToReveal.forEach(element => {
    observer.observe(element);
});


// =========================================================
// ANO AUTOMÁTICO NO RODAPÉ
// =========================================================

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// =========================================================
// EFEITO SUAVE NO HEADER AO ROLAR
// =========================================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(5, 8, 14, 0.96)";

    } else {

        header
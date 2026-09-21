```javascript
// ==============================
// TEMA CLARO / ESCURO
// ==============================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }

});


// ==============================
// ANIMAÇÃO AO APARECER
// ==============================

const elements = document.querySelectorAll(
    ".timeline-item, .card, .stat, .intro-text"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


// ==============================
// EFEITO DE DIGITAÇÃO NO HERO
// ==============================

const tag = document.querySelector(".tag");

const originalText = tag.textContent;

tag.textContent = "";

let index = 0;

function typeWriter() {

    if (index < originalText.length) {

        tag.textContent += originalText.charAt(index);

        index++;

        setTimeout(typeWriter, 45);

    }

}

typeWriter();
```

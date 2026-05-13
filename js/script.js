document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".about, .services, .why-choose-us, .testimonials, .contact");

    function revealOnScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on page load in case sections are already in view
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");

    // Toggle menu on hamburger click
    hamburger.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent click from propagating
        nav.classList.toggle("active");
    });

    // Close menu when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
            nav.classList.remove("active");
        }
    });
});
/* =========================================================
   PANDAT JI CATERERS
   PREMIUM JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");


if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

        if (navbar.classList.contains("active")) {
            menuBtn.innerHTML = "✕";
        } else {
            menuBtn.innerHTML = "☰";
        }

    });


    const navLinks = navbar.querySelectorAll("a");


    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

            menuBtn.innerHTML = "☰";

        });

    });

}


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header = document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (!header) return;


    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;


        const target = document.querySelector(targetId);


        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================================
   ANIMATED COUNTERS
========================================================= */

const counters = document.querySelectorAll(".counter");


const startCounter = (counter) => {

    const target = Number(counter.dataset.target);

    let current = 0;

    const duration = 1800;

    const startTime = performance.now();


    function updateCounter(currentTime) {

        const elapsed = currentTime - startTime;

        const progress = Math.min(elapsed / duration, 1);


        // Smooth easing
        const easedProgress =
            1 - Math.pow(1 - progress, 3);


        current = Math.floor(target * easedProgress);


        if (target === 100) {

            counter.textContent = current + "%";

        } else {

            counter.textContent = current + "+";

        }


        if (progress < 1) {

            requestAnimationFrame(updateCounter);

        } else {

            if (target === 100) {

                counter.textContent = "100%";

            } else {

                counter.textContent = target + "+";

            }

        }

    }


    requestAnimationFrame(updateCounter);

};


if (counters.length > 0) {

    const counterObserver = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    startCounter(entry.target);

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.5
        }

    );


    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".service-card, .menu-card, .package-card, .why-card, .review-card, .gallery-item, .contact-box"
);


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   CONTACT FORM → WHATSAPP
========================================================= */

const contactForm = document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name")?.value.trim() || "";


        const phone =
            document.getElementById("phone")?.value.trim() || "";


        const eventType =
            document.getElementById("event")?.value || "";


        const message =
            document.getElementById("message")?.value.trim() || "";


        if (!name || !phone || !message) {

            alert("Please fill in all required details.");

            return;

        }


        const whatsappNumber = "919873051440";


        const text =
            `Hello Pandat Ji Caterers!%0A%0A` +

            `Name: ${encodeURIComponent(name)}%0A` +

            `Phone: ${encodeURIComponent(phone)}%0A` +

            `Event: ${encodeURIComponent(eventType)}%0A` +

            `Message: ${encodeURIComponent(message)}%0A%0A` +

            `I would like to know about your catering services.`;


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${text}`;


        window.open(whatsappURL, "_blank");

    });

}


/* =========================================================
   IMAGE ERROR HANDLING
========================================================= */

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", () => {

        img.style.opacity = "0.25";

        img.alt = "Pandat Ji Caterers";

    });

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll("#navbar a");


window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   PREVENT EMPTY LINKS
========================================================= */

document.querySelectorAll('a[href="#"]').forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

    });

});


/* =========================================================
   PAGE LOADED
========================================================= */

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

});
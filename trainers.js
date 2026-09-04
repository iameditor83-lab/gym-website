/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu after clicking */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================
   STICKY NAVBAR
========================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   TRAINER SELECTION
========================================= */

const trainerButtons =
    document.querySelectorAll("[data-trainer]");

const trainerSelect =
    document.getElementById("trainer");


trainerButtons.forEach(button => {

    button.addEventListener("click", () => {

        const trainerName =
            button.dataset.trainer;

        if (trainerSelect) {

            trainerSelect.value =
                trainerName;

        }

    });

});


/* =========================================
   FORM TO WHATSAPP
========================================= */

const trainerForm =
    document.getElementById("trainerForm");


trainerForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("name")
        .value
        .trim();


    const phone =
        document.getElementById("phone")
        .value
        .trim();


    const trainer =
        document.getElementById("trainer")
        .value || "No preference";


    const goal =
        document.getElementById("goal")
        .value || "Not specified";


    if (!name || !phone) {

        alert(
            "Please enter your name and phone number."
        );

        return;

    }


    const message =
`Hi IRONVAULT FITNESS,

I want to book a training session.

Name: ${name}
Phone: ${phone}
Preferred Trainer: ${trainer}
Fitness Goal: ${goal}`;


    /* Replace with actual gym WhatsApp number */

    const whatsappNumber =
        "919876543210";


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


    window.open(
        whatsappURL,
        "_blank"
    );

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;


                entry.target.classList.add("show");


                observer.unobserve(
                    entry.target
                );

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    observer.observe(element);

});
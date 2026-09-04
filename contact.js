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


/* Close mobile menu */

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
   FORM TO WHATSAPP
========================================= */

const trialForm =
    document.getElementById("trialForm");


trialForm.addEventListener("submit", event => {

    event.preventDefault();


    const name =
        document.getElementById("name")
        .value
        .trim();


    const phone =
        document.getElementById("phone")
        .value
        .trim();


    const interest =
        document.getElementById("interest")
        .value || "Not specified";


    const time =
        document.getElementById("time")
        .value || "Not specified";


    const message =
        document.getElementById("message")
        .value
        .trim() || "No additional message";


    if (!name || !phone) {

        alert(
            "Please enter your name and phone number."
        );

        return;

    }


    const whatsappMessage =

`Hi IRONVAULT FITNESS,

I want to book a FREE TRIAL.

Name: ${name}
Phone: ${phone}
Interested In: ${interest}
Preferred Time: ${time}

Message:
${message}`;


    /* Replace with actual gym WhatsApp number */

    const whatsappNumber =
        "919876543210";


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


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
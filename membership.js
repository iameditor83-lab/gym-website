/* =========================================
   MOBILE MENU
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
   PLAN SELECTION
========================================= */

const planButtons = document.querySelectorAll("[data-plan]");
const planSelect = document.getElementById("plan");

planButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedPlan = button.dataset.plan;

        if (planSelect) {
            planSelect.value = selectedPlan;
        }

    });

});


/* =========================================
   FORM → WHATSAPP
========================================= */

const membershipForm =
    document.getElementById("membershipForm");

membershipForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const plan =
        document.getElementById("plan").value;


    if (!name || !phone || !plan) {

        alert("Please fill all the fields.");

        return;

    }


    const message =
        `Hi IRONVAULT FITNESS,

I want to enquire about membership.

Name: ${name}
Phone: ${phone}
Plan: ${plan}`;


    const whatsappNumber = "919876543210";

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


    window.open(whatsappURL, "_blank");

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    observer.observe(element);

});
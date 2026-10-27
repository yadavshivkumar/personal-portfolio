
// ============================================
// PERSONAL PORTFOLIO - HOMEPAGE JAVASCRIPT
// ============================================


// ============================================
// STEP 1: UPDATE FOOTER YEAR AUTOMATICALLY
// ============================================

// Footer paragraph ko select karein.
const footerYear = document.querySelector(".site-footer p");

// Agar footer available hai, to year update karein.
if (footerYear) {
    footerYear.innerHTML = footerYear.innerHTML.replace(
        /\d{4}/,
        new Date().getFullYear()
    );
}


// ============================================
// STEP 2: MOBILE NAVIGATION MENU
// ============================================

// Navigation elements ko select karein.
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");
const menuButton = document.querySelector(".menu-toggle");

// Mobile menu button aur navigation links available hon tabhi code chalega.
if (navbar && navLinks && menuButton) {

    // Menu button click karne par navigation open ya close karein.
    menuButton.addEventListener("click", () => {

        // Check karein ki menu abhi open hai ya closed.
        const isExpanded =
            menuButton.getAttribute("aria-expanded") === "true";

        // Accessibility ke liye button ki state update karein.
        menuButton.setAttribute(
            "aria-expanded",
            String(!isExpanded)
        );

        // Navigation menu ki visibility toggle karein.
        navLinks.classList.toggle("nav-links-open");
    });

    // Kisi navigation link par click karne ke baad menu close karein.
    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("nav-links-open");

            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}


// ============================================
// STEP 3: SMOOTH SCROLLING
// ============================================

// Page ke internal section links select karein.
document.querySelectorAll('a[href^="#"]').forEach((link) => {

    // Link par click hone par event handle karein.
    link.addEventListener("click", (event) => {

        // Link ka target ID read karein.
        const targetId = link.getAttribute("href");

        // Empty anchor ko ignore karein.
        if (!targetId || targetId === "#") {
            return;
        }

        // Target section ko find karein.
        const targetSection = document.querySelector(targetId);

        // Section milne par smooth scrolling enable karein.
        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ============================================
// STEP 4: CONTACT FORM VALIDATION
// ============================================

// Contact form aur status message select karein.
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

// Form aur status element available hon tabhi listener add karein.
if (contactForm && formStatus) {

    // Form submit hone par ye event chalega.
    contactForm.addEventListener("submit", (event) => {

        // Default form submission ko rokein.
        event.preventDefault();

        // Browser ke built-in validation rules check karein.
        if (!contactForm.checkValidity()) {

            // Invalid ya empty fields par browser ka message dikhayein.
            contactForm.reportValidity();

            return;
        }

        // Form fields ki values read karein.
        const nameInput = document.getElementById("contact-name");
        const emailInput = document.getElementById("contact-email");
        const messageInput = document.getElementById("contact-message");

        // Confirm karein ki saare required fields available hain.
        if (!nameInput || !emailInput || !messageInput) {
            console.error("One or more contact form fields are missing.");
            return;
        }

        // User ke input se extra spaces remove karein.
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // Empty values ko dobara check karein.
        if (!name || !email || !message) {

            formStatus.textContent = "Please fill in all fields.";

            return;
        }

        // Abhi form email service ya backend se connected nahi hai.
        // Isliye filhaal sirf validation confirmation show karein.
        formStatus.textContent =
            "Your form looks good, but message delivery is not configured yet.";

        // Development ke dauran browser console mein confirmation.
        console.log("Contact form validated successfully.");
    });
}


// ============================================
// STEP 5: JAVASCRIPT LOADING CONFIRMATION
// ============================================

// Browser Console mein success message show karein.
console.log("Portfolio homepage JavaScript loaded successfully.");
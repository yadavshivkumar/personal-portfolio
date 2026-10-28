
// ============================================
// PROJECT ELEMENTS
// ============================================

// Select all project cards and category filter buttons.
const projectCards = document.querySelectorAll(".project-card");
const filterButtons = document.querySelectorAll(".filter-btn");

// Elements used to display project count and empty state.
const projectCount = document.getElementById("project-count");
const noProjectsMessage = document.getElementById("no-projects");


// ============================================
// GITHUB REPOSITORY LINKS
// ============================================

// Maps project categories and normalized titles to GitHub repositories.
const projectGitHubMap = {

    // ----------------------------------------
    // EXCEL PROJECTS
    // ----------------------------------------

    "excel:coffee shop sales analysis":
        "https://github.com/yadavshivkumar/coffee-shop-sales-analysis-excel-dashboard",

    "excel:ferns and petals sales analysis":
        "https://github.com/yadavshivkumar/fnp-sales-analysis-excel-dashboard",

    "excel:ecommerce sales analysis":
        "https://github.com/yadavshivkumar/ecommerce-sales-analysis-excel-dashboard",

    "excel:e commerce sales analysis":
        "https://github.com/yadavshivkumar/ecommerce-sales-analysis-excel-dashboard",

    "excel:amzn stock analysis":
        "https://github.com/yadavshivkumar/amazon-stock-analysis-excel-dashboard",

    "excel:ipl dataset analysis":
        "https://github.com/yadavshivkumar/ipl-match-performance-analysis-dashboard",


    // ----------------------------------------
    // PYTHON PROJECTS
    // ----------------------------------------

    "python:student performance analysis":
        "https://github.com/yadavshivkumar/student-performance-analysis-python",

    "python:data cleaning and quality checker":
        "https://github.com/yadavshivkumar/data-cleaning-quality-checker-python",

    "python:diwali sales analysis":
        "https://github.com/yadavshivkumar/diwali-sales-analysis-python",

    "python:amazon sales analysis":
        "https://github.com/yadavshivkumar/amazon-sales-analysis-python",

    "python:ecommerce sales analysis":
        "https://github.com/yadavshivkumar/ecommerce-sales-analysis-python",

    "python:e commerce sales analysis":
        "https://github.com/yadavshivkumar/ecommerce-sales-analysis-python",


    // ----------------------------------------
    // WEB DEVELOPMENT PROJECTS
    // ----------------------------------------

    "web:employee management system":
        "https://github.com/yadavshivkumar/employee-management-system",

    "web:ausbildung application tracker":
        "https://github.com/yadavshivkumar/ausbildung-application-tracker",

    "web:student management system":
        "https://github.com/yadavshivkumar/student-management-system",

    "web:shopease ecommerce":
        "https://github.com/yadavshivkumar/shopease-ecommerce-website",

    "web:shopease e commerce":
        "https://github.com/yadavshivkumar/shopease-ecommerce-website"
};

// ============================================
// LIVE DEMO LINKS FOR WEB DEVELOPMENT PROJECTS
// ============================================

// These URLs point to the published GitHub Pages websites.
// Only web projects will receive a Live Demo button.

const projectLiveDemoMap = {
    "web:employee management system":
        "https://yadavshivkumar.github.io/employee-management-system/",

    "web:ausbildung application tracker":
        "https://yadavshivkumar.github.io/ausbildung-application-tracker/",

    "web:student management system":
        "https://yadavshivkumar.github.io/student-management-system/",

    "web:shopease ecommerce":
        "https://yadavshivkumar.github.io/shopease-ecommerce-website/",

    "web:shopease e commerce":
        "https://yadavshivkumar.github.io/shopease-ecommerce-website/"
};


// ============================================
// LIVE DEMO LINKS
// ============================================

// Only published Web Development projects have Live Demo links.
// Excel and Python projects will display GitHub buttons only.

const projectLiveDemoMap = {

    "web:employee management system":
        "https://yadavshivkumar.github.io/employee-management-system/",

    "web:ausbildung application tracker":
        "https://yadavshivkumar.github.io/ausbildung-application-tracker/",

    "web:student management system":
        "https://yadavshivkumar.github.io/student-management-system/",

    "web:shopease ecommerce":
        "https://yadavshivkumar.github.io/shopease-ecommerce-website/",

    "web:shopease e commerce":
        "https://yadavshivkumar.github.io/shopease-ecommerce-website/"
};


// ============================================
// NORMALIZE PROJECT TITLES
// ============================================

// Converts titles into a consistent format for matching.
// Example: "ShopEase E-commerce Website" -> "shopease e commerce"

function normalizeProjectTitle(title) {
    return title
        .toLowerCase()
        .replace(/\bwebsite\b/g, "")
        .replace(/[^a-z0-9]+/g, " ")
        .trim()
        .replace(/\s+/g, " ");
}


// ============================================
// ADD PROJECT ACTION BUTTONS
// ============================================

// Automatically adds GitHub and Live Demo buttons to project cards.


<<<<<<< HEAD
// ============================================
// ADD GITHUB AND LIVE DEMO BUTTONS TO PROJECTS
// ============================================

projectCards.forEach((card) => {
    // Read the project's category, such as Excel, Python, or Web.
    const category = card.dataset.category;

    // Get the project title from the card.
    const titleElement = card.querySelector("h3, h2, .project-card-title");

=======
    // Read the category from the project card.
    const category = card.dataset.category;

    // Find the project title.
    const titleElement = card.querySelector(
        "h3, h2, .project-card-title"
    );

    // Skip cards without a recognizable title.
>>>>>>> d723e6e66559ceef4f63096929188241e9262dab
    if (!titleElement) {
        console.warn("Project title not found:", card);
        return;
    }

<<<<<<< HEAD
    // Normalize the title so it matches the mapping keys.
    const normalizedTitle = normalizeProjectTitle(titleElement.textContent);
    const mappingKey = `${category}:${normalizedTitle}`;

    // Find the GitHub repository and optional live demo URL.
    const githubUrl = projectGitHubMap[mappingKey];
    const liveDemoUrl = projectLiveDemoMap[mappingKey];

    // Find or create the container for project action buttons.
    let actions = card.querySelector(".project-card-actions");

=======
    // Normalize the title and create its mapping key.
    const normalizedTitle = normalizeProjectTitle(
        titleElement.textContent
    );

    const mappingKey = `${category}:${normalizedTitle}`;

    // Look up the GitHub repository and optional live demo.
    const githubUrl = projectGitHubMap[mappingKey];
    const liveDemoUrl = projectLiveDemoMap[mappingKey];

    // Find the action buttons container.
    let actions = card.querySelector(".project-card-actions");

    // Create the container if it does not exist.
>>>>>>> d723e6e66559ceef4f63096929188241e9262dab
    if (!actions) {
        actions = document.createElement("div");
        actions.className = "project-card-actions";
        card.appendChild(actions);
    }

<<<<<<< HEAD
    // Clear existing buttons to avoid duplicates.
    actions.innerHTML = "";

    // Add the Live Demo button only when a demo URL exists.
    if (liveDemoUrl) {
        const demoButton = document.createElement("a");

        demoButton.className = "btn btn-primary live-demo-btn";
        demoButton.href = liveDemoUrl;
        demoButton.target = "_blank";
        demoButton.rel = "noopener noreferrer";
        demoButton.textContent = "Live Demo Link";
        demoButton.setAttribute("aria-label", `Open live demo for ${titleElement.textContent.trim()}`);

        actions.appendChild(demoButton);
    }

    // Add the GitHub button.
    if (githubUrl) {
=======
    // Clear existing buttons to prevent duplicates.
    actions.innerHTML = "";


    // ----------------------------------------
    // LIVE DEMO BUTTON
    // ----------------------------------------

    // Display this button only when a live demo URL exists.
    if (liveDemoUrl) {

        const demoButton = document.createElement("a");

        demoButton.className = "btn btn-primary live-demo-btn";
        demoButton.href = liveDemoUrl;
        demoButton.target = "_blank";
        demoButton.rel = "noopener noreferrer";

        demoButton.textContent = "Live Demo ↗";

        demoButton.setAttribute(
            "aria-label",
            `Open live demo for ${titleElement.textContent.trim()}`
        );

        actions.appendChild(demoButton);
    }


    // ----------------------------------------
    // GITHUB BUTTON
    // ----------------------------------------

    // All mapped projects receive a GitHub repository button.
    if (githubUrl) {

>>>>>>> d723e6e66559ceef4f63096929188241e9262dab
        const githubButton = document.createElement("a");

        githubButton.className = "btn btn-primary";
        githubButton.href = githubUrl;
        githubButton.target = "_blank";
        githubButton.rel = "noopener noreferrer";
        githubButton.textContent = "View Details on GitHub ";
        githubButton.setAttribute("aria-label", `View GitHub repository for ${titleElement.textContent.trim()}`);

<<<<<<< HEAD
=======
        githubButton.textContent = "View on GitHub ↗";

        githubButton.setAttribute(
            "aria-label",
            `View GitHub repository for ${titleElement.textContent.trim()}`
        );

>>>>>>> d723e6e66559ceef4f63096929188241e9262dab
        actions.appendChild(githubButton);
    } else {
<<<<<<< HEAD
        console.warn("GitHub URL not found for project:", mappingKey);
=======

        // Helps identify any project missing a GitHub mapping.
        console.warn(
            "GitHub URL not found for project:",
            mappingKey
        );
>>>>>>> d723e6e66559ceef4f63096929188241e9262dab
    }
});


// ============================================
// PROJECT CATEGORY FILTER
// ============================================

// Filters projects by category and updates the project count.

function filterProjects(category) {

    let visibleCount = 0;

    projectCards.forEach((card) => {

        const cardCategory = card.dataset.category;

        // Show all projects or only the selected category.
        const shouldShow =
            category === "all" || cardCategory === category;

        card.hidden = !shouldShow;

        if (shouldShow) {
            visibleCount++;
        }
    });


    // Update the visible project count.
    if (projectCount) {

        projectCount.textContent =
            `Showing ${visibleCount} project${visibleCount !== 1 ? "s" : ""}`;
    }


    // Display an empty-state message when no projects match.
    if (noProjectsMessage) {
        noProjectsMessage.hidden = visibleCount !== 0;
    }
}


// ============================================
// FILTER BUTTON EVENT LISTENERS
// ============================================

// Updates the active filter and applies the selected category.

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Read the selected category.
        const category = button.dataset.filter;

        // Update the active button.
        filterButtons.forEach((filterButton) => {

            const isActive = filterButton === button;

            filterButton.classList.toggle("active", isActive);

            filterButton.setAttribute(
                "aria-pressed",
                String(isActive)
            );
        });

        // Apply the selected category filter.
        filterProjects(category);
    });
});


// ============================================
// INITIALIZE PROJECT PAGE
// ============================================

// Display all projects when the page first loads.

filterProjects("all");

console.log(
    "Projects initialized: GitHub links, Live Demo links, and category filters are ready."
);

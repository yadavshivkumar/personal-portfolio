// ============================================
// PROJECTS PAGE
// GitHub links, project cards and category filters
// ============================================


// ============================================
// SELECT HTML ELEMENTS
// ============================================

// Select all project cards from the projects page.
const projectCards = document.querySelectorAll(".project-card");

// Select all category filter buttons.
const filterButtons = document.querySelectorAll(".filter-btn");

// Select the visible-project counter.
const projectCount = document.getElementById("project-count");

// Select the message displayed when no projects are found.
const noProjectsMessage = document.getElementById("no-projects");


// ============================================
// GITHUB REPOSITORY LINKS
// ============================================

// IMPORTANT:
// Excel repository names are unchanged because those
// repositories have already been uploaded.
// Python and Web repository links use the final names
// we selected. Create those repositories with exactly
// the same names before uploading the projects.

const projectGitHubMap = {

    // ----------------------------------------
    // EXCEL DATA ANALYSIS PROJECTS
    // Existing repository names: DO NOT CHANGE
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
    // PYTHON DATA ANALYSIS PROJECTS
    // Use the final repository names listed below.
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
    // Use the final repository names listed below.
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
// NORMALIZE PROJECT TITLES
// ============================================

// Normalize titles so differences in capitalization,
// punctuation and extra spaces do not cause lookup errors.
// The word "Website" is removed because it is not needed
// when matching a project title to its GitHub repository.

function normalizeProjectTitle(title) {
    return title
        .toLowerCase()
        .replace(/\bwebsite\b/g, "")
        .replace(/[^a-z0-9]+/g, " ")
        .trim()
        .replace(/\s+/g, " ");
}


// ============================================
// ADD GITHUB BUTTONS TO PROJECT CARDS
// ============================================

// Every card gets a GitHub button when a matching
// repository URL is available in projectGitHubMap.


// ============================================
// ADD GITHUB AND LIVE DEMO BUTTONS TO PROJECTS
// ============================================

projectCards.forEach((card) => {
    // Read the project's category, such as Excel, Python, or Web.
    const category = card.dataset.category;

    // Get the project title from the card.
    const titleElement = card.querySelector("h3, h2, .project-card-title");

    if (!titleElement) {
        console.warn("Project title not found:", card);
        return;
    }

    // Normalize the title so it matches the mapping keys.
    const normalizedTitle = normalizeProjectTitle(titleElement.textContent);
    const mappingKey = `${category}:${normalizedTitle}`;

    // Find the GitHub repository and optional live demo URL.
    const githubUrl = projectGitHubMap[mappingKey];
    const liveDemoUrl = projectLiveDemoMap[mappingKey];

    // Find or create the container for project action buttons.
    let actions = card.querySelector(".project-card-actions");

    if (!actions) {
        actions = document.createElement("div");
        actions.className = "project-card-actions";
        card.appendChild(actions);
    }

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
        const githubButton = document.createElement("a");

        githubButton.className = "btn btn-primary";
        githubButton.href = githubUrl;
        githubButton.target = "_blank";
        githubButton.rel = "noopener noreferrer";
        githubButton.textContent = "View Details on GitHub ";
        githubButton.setAttribute("aria-label", `View GitHub repository for ${titleElement.textContent.trim()}`);

        actions.appendChild(githubButton);
    } else {
        console.warn("GitHub URL not found for project:", mappingKey);
    }
});


// ============================================
// FILTER PROJECTS BY CATEGORY
// ============================================

// Show all projects or only projects in the selected category.

function filterProjects(category) {

    // Track how many projects are currently visible.
    let visibleCount = 0;

    projectCards.forEach((card) => {

        // Read the category assigned to this card.
        const projectCategory = card.dataset.category;

        // Show the card if All is selected or its category matches.
        const shouldShow =
            category === "all" ||
            projectCategory === category;

        // Hide cards that do not match the selected category.
        card.hidden = !shouldShow;

        // Count visible cards.
        if (shouldShow) {
            visibleCount++;
        }
    });

    // Update the visible-project counter.
    if (projectCount) {
        projectCount.textContent =
            `Showing ${visibleCount} project${visibleCount === 1 ? "" : "s"}`;
    }

    // Display the no-projects message only if no cards are visible.
    if (noProjectsMessage) {
        noProjectsMessage.hidden = visibleCount !== 0;
    }
}


// ============================================
// FILTER BUTTON EVENT LISTENERS
// ============================================

// Respond when a user clicks a category filter.

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Read the selected category from the button.
        const selectedCategory = button.dataset.filter;

        // Display projects belonging to that category.
        filterProjects(selectedCategory);

        // Update the active filter button and accessibility state.
        filterButtons.forEach((filterButton) => {

            const isActive = filterButton === button;

            // Highlight the selected filter.
            filterButton.classList.toggle(
                "active",
                isActive
            );

            // Update the button's accessibility state.
            filterButton.setAttribute(
                "aria-pressed",
                String(isActive)
            );
        });
    });
});


// ============================================
// INITIALIZE THE PROJECTS PAGE
// ============================================

// Display all projects when the page first loads.
filterProjects("all");


// ============================================
// CONSOLE CONFIRMATION
// ============================================

// Log a message to help verify that the script has loaded.
console.log("Projects page initialized successfully.");
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

projectCards.forEach((card) => {

    // Read the category assigned to this project card.
    const category = card.dataset.category;

    // Find the project title inside the card.
    const titleElement = card.querySelector(
        "h3, h2, .project-card-title"
    );

    // Skip the card if its title cannot be found.
    if (!titleElement) {
        console.warn(
            "Project card title not found:",
            card
        );
        return;
    }

    // Normalize the project title for consistent matching.
    const normalizedTitle = normalizeProjectTitle(
        titleElement.textContent
    );

    // Combine the category and title to find the repository.
    const mappingKey = `${category}:${normalizedTitle}`;

    // Look up the GitHub repository URL.
    const githubUrl = projectGitHubMap[mappingKey];

    // Find the existing action-buttons container.
    let actions = card.querySelector(
        ".project-card-actions"
    );

    // Create the container if the card does not have one.
    if (!actions) {
        actions = document.createElement("div");
        actions.className = "project-card-actions";
        card.appendChild(actions);
    }

    // Remove any old View Details buttons from the container.
    actions.innerHTML = "";

    // Add a GitHub button only when a repository URL exists.
    if (githubUrl) {

        // Create the repository link.
        const githubButton = document.createElement("a");

        // Set the link to the corresponding GitHub repository.
        githubButton.href = githubUrl;

        // Reuse the existing primary button styling.
        githubButton.className = "btn btn-primary";

        // Set the button's visible text.
        githubButton.textContent =
            "View Detailed Project on GitHub →";

        // Open GitHub in a new browser tab.
        githubButton.target = "_blank";

        // Improve security when opening an external website.
        githubButton.rel = "noopener noreferrer";

        // Add the button to the project card.
        actions.appendChild(githubButton);

    } else {

        // Log unmatched cards so their titles can be corrected.
        console.warn(
            "GitHub repository mapping not found:",
            mappingKey
        );
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
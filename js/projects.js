
// ============================================
// PROJECT ELEMENTS
// ============================================

const projectCards = document.querySelectorAll(".project-card");
const filterButtons = document.querySelectorAll(".filter-btn");

const projectCount = document.getElementById("project-count");
const noProjectsMessage = document.getElementById("no-projects");


// ============================================
// GITHUB REPOSITORY LINKS
// ============================================

const projectGitHubMap = {
    // Excel projects
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

    // Python projects
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

    // Web development projects
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
// LIVE DEMO LINKS
// ============================================

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

projectCards.forEach((card) => {
    const category = card.dataset.category;

    const titleElement = card.querySelector(
        "h3, h2, .project-card-title"
    );

    if (!titleElement) {
        console.warn("Project title not found:", card);
        return;
    }

    const normalizedTitle = normalizeProjectTitle(
        titleElement.textContent
    );

    const mappingKey = `${category}:${normalizedTitle}`;

    const githubUrl = projectGitHubMap[mappingKey];
    const liveDemoUrl = projectLiveDemoMap[mappingKey];

    let actions = card.querySelector(".project-card-actions");

    if (!actions) {
        actions = document.createElement("div");
        actions.className = "project-card-actions";
        card.appendChild(actions);
    }

    // Prevent duplicate buttons.
    actions.innerHTML = "";

    // Add Live Demo button only to web projects with a demo URL.
    if (liveDemoUrl) {
        const demoButton = document.createElement("a");

        demoButton.className = "btn btn-primary live-demo-btn";
        demoButton.href = liveDemoUrl;
        demoButton.target = "_blank";
        demoButton.rel = "noopener noreferrer";
        demoButton.textContent = "Live Demo";

        demoButton.setAttribute(
            "aria-label",
            `Open live demo for ${titleElement.textContent.trim()}`
        );

        actions.appendChild(demoButton);
    }

    // Add GitHub button.
    if (githubUrl) {
        const githubButton = document.createElement("a");

        githubButton.className = "btn btn-primary";
        githubButton.href = githubUrl;
        githubButton.target = "_blank";
        githubButton.rel = "noopener noreferrer";
        githubButton.textContent = "View on GitHub";

        githubButton.setAttribute(
            "aria-label",
            `View GitHub repository for ${titleElement.textContent.trim()}`
        );

        actions.appendChild(githubButton);
    } else {
        console.warn("GitHub URL not found for project:", mappingKey);
    }
});


// ============================================
// PROJECT CATEGORY FILTER
// ============================================

function filterProjects(category) {
    let visibleCount = 0;

    projectCards.forEach((card) => {
        const cardCategory = card.dataset.category;

        const shouldShow =
            category === "all" || cardCategory === category;

        card.hidden = !shouldShow;

        if (shouldShow) {
            visibleCount++;
        }
    });

    if (projectCount) {
        projectCount.textContent =
            `Showing ${visibleCount} project${visibleCount !== 1 ? "s" : ""}`;
    }

    if (noProjectsMessage) {
        noProjectsMessage.hidden = visibleCount !== 0;
    }
}


// ============================================
// FILTER BUTTON EVENT LISTENERS
// ============================================

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const category = button.dataset.filter;

        filterButtons.forEach((filterButton) => {
            const isActive = filterButton === button;

            filterButton.classList.toggle("active", isActive);

            filterButton.setAttribute(
                "aria-pressed",
                String(isActive)
            );
        });

        filterProjects(category);
    });
});


// ============================================
// INITIALIZE PROJECT PAGE
// ============================================

filterProjects("all");

console.log(
    "Projects initialized: GitHub links, Live Demo links, and category filters are ready."
);
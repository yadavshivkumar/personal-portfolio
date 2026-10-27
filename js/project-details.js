// ============================================
// PROJECT DETAILS DATA
// Stores the information for all 14 projects
// ============================================

const projectsData = [

    // ========================================
    // CATEGORY 1: EXCEL DASHBOARDS (5 PROJECTS)
    // ========================================

    {
        id: "coffee-shop-sales",
        title: "Coffee Shop Sales Analysis",
        category: "Excel Dashboard",
        summary: "Analyze coffee shop sales to explore revenue patterns, product performance, and customer purchasing trends.",
        overview: "This project focuses on analyzing coffee shop transaction data using Microsoft Excel. The goal is to organize sales data, summarize important business metrics, and present findings through an interactive dashboard.",
        problem: "Raw transaction data can make it difficult to identify high-performing products, understand sales patterns, and compare business performance across different periods.",
        tools: ["Microsoft Excel", "Data Cleaning", "PivotTables", "Charts", "Dashboard Design"],
        objectives: [
            "Prepare and organize the sales dataset.",
            "Analyze sales revenue and transaction patterns.",
            "Compare product and category performance where the data permits.",
            "Present important metrics through a clear dashboard."
        ],
        workflow: [
            "Inspect the source data and understand its columns.",
            "Clean inconsistent values and prepare the dataset.",
            "Summarize sales using appropriate Excel functions and PivotTables.",
            "Create charts for relevant sales metrics.",
            "Arrange the visualizations into a dashboard."
        ],
        features: [
            "Sales performance summaries.",
            "Visual comparison of relevant sales metrics.",
            "Product performance analysis where supported by the dataset.",
            "Dashboard-based presentation of business information."
        ],
        learning: [
            "Preparing sales data for analysis.",
            "Using Excel to summarize business data.",
            "Designing charts and dashboard layouts.",
            "Communicating business insights visually."
        ]
    },

    {
        id: "ferns-petals-sales",
        title: "Ferns and Petals Sales Analysis",
        category: "Excel Dashboard",
        summary: "Explore gifting sales data to understand revenue, product performance, and ordering patterns.",
        overview: "This Excel project examines sales data associated with Ferns and Petals. It focuses on transforming order-level data into understandable business summaries and dashboard visualizations.",
        problem: "Order datasets can contain many products, occasions, dates, and customer-related fields. Structured analysis can help make these records easier to interpret.",
        tools: ["Microsoft Excel", "Data Cleaning", "PivotTables", "Excel Charts", "Dashboard Design"],
        objectives: [
            "Inspect and prepare the order dataset.",
            "Analyze available sales and order metrics.",
            "Compare product and occasion-related performance where supported by the data.",
            "Build a dashboard for communicating the analysis."
        ],
        workflow: [
            "Review the available columns and data types.",
            "Check data quality and prepare the dataset.",
            "Calculate relevant sales metrics.",
            "Summarize the data using Excel analysis tools.",
            "Create visualizations and arrange the dashboard."
        ],
        features: [
            "Sales and order summaries.",
            "Product-level comparisons where applicable.",
            "Occasion-related analysis where the dataset supports it.",
            "Visual presentation of business metrics."
        ],
        learning: [
            "Analyzing order and sales records.",
            "Using Excel summarization tools.",
            "Selecting appropriate business metrics.",
            "Building a business-focused dashboard."
        ]
    },

    {
        id: "ecommerce-excel",
        title: "E-commerce Sales Analysis",
        category: "Excel Dashboard",
        summary: "Use Excel to summarize e-commerce sales data and examine business performance.",
        overview: "This project uses Microsoft Excel to organize and analyze e-commerce sales records. It focuses on identifying useful sales metrics and presenting the analysis through visual summaries.",
        problem: "Large collections of online sales records can be difficult to evaluate without consistent metrics and clear visual summaries.",
        tools: ["Microsoft Excel", "Data Cleaning", "Formulas", "PivotTables", "Charts"],
        objectives: [
            "Prepare the e-commerce dataset for analysis.",
            "Summarize relevant sales and order metrics.",
            "Compare available product or category information.",
            "Present the results in an understandable dashboard."
        ],
        workflow: [
            "Inspect the dataset and identify relevant fields.",
            "Clean and validate the available records.",
            "Calculate appropriate sales metrics.",
            "Create summaries and charts.",
            "Organize the dashboard for easier interpretation."
        ],
        features: [
            "Sales metric summaries.",
            "Product or category comparisons where available.",
            "Visual analysis of relevant business measures.",
            "Dashboard-oriented reporting."
        ],
        learning: [
            "Working with e-commerce sales data.",
            "Applying Excel functions to business analysis.",
            "Summarizing data with PivotTables.",
            "Presenting information through charts."
        ]
    },

    {
        id: "amzn-stock-analysis",
        title: "AMZN Stock Analysis",
        category: "Excel Dashboard",
        summary: "Explore Amazon stock data and visualize historical market performance using Excel.",
        overview: "This project focuses on analyzing historical AMZN stock data in Microsoft Excel. Depending on the available fields, the analysis can examine price movements, trading volume, and changes over time.",
        problem: "Historical market data contains many observations, making it useful to summarize price movements and visualize changes across selected periods.",
        tools: ["Microsoft Excel", "Historical Stock Data", "Excel Formulas", "Charts", "Dashboard Design"],
        objectives: [
            "Prepare historical stock records for analysis.",
            "Examine available price and volume fields.",
            "Visualize stock performance over time.",
            "Present historical market metrics clearly."
        ],
        workflow: [
            "Inspect the available stock data and date fields.",
            "Check data types and missing records.",
            "Calculate relevant historical metrics.",
            "Create time-series charts and comparisons.",
            "Organize the analysis into a readable report or dashboard."
        ],
        features: [
            "Historical price visualization.",
            "Date-based performance analysis.",
            "Trading volume analysis if volume data is available.",
            "Summary of selected historical metrics."
        ],
        learning: [
            "Working with time-series data.",
            "Handling dates in Excel.",
            "Visualizing historical financial data.",
            "Interpreting market data without assuming future performance."
        ]
    },

    {
        id: "ipl-analysis-excel",
        title: "IPL Dataset Analysis",
        category: "Excel Dashboard",
        summary: "Explore Indian Premier League datasets and summarize team and match statistics.",
        overview: "This project uses Microsoft Excel to analyze IPL-related data. Depending on the dataset, it can explore match outcomes, team performance, player statistics, and season-wise patterns.",
        problem: "Sports datasets contain multiple teams, players, matches, and seasons. Summarizing these records can make comparisons easier.",
        tools: ["Microsoft Excel", "Data Cleaning", "PivotTables", "Charts", "Dashboard Design"],
        objectives: [
            "Inspect and prepare the IPL dataset.",
            "Summarize available match and player statistics.",
            "Compare team performance using relevant measures.",
            "Visualize important patterns in the data."
        ],
        workflow: [
            "Inspect the available match and player fields.",
            "Clean records and standardize relevant values.",
            "Summarize selected statistics.",
            "Compare teams, players, or seasons where supported by the data.",
            "Build charts and organize the findings."
        ],
        features: [
            "Match and team summaries.",
            "Player statistics where available.",
            "Season-based comparisons where supported.",
            "Visual presentation of selected cricket statistics."
        ],
        learning: [
            "Analyzing structured sports data.",
            "Comparing categorical and numerical information.",
            "Creating Excel summaries and charts.",
            "Communicating statistical comparisons."
        ]
    },

    // ========================================
    // CATEGORY 2: PYTHON ANALYSIS (5 PROJECTS)
    // ========================================

    {
        id: "student-performance",
        title: "Student Performance Analysis",
        category: "Python Data Analysis",
        summary: "Explore student academic data using Python, Pandas, and data visualization.",
        overview: "This project analyzes student performance datasets using Python. It focuses on data inspection, cleaning, exploratory data analysis, and visualizing relationships between available variables and academic outcomes.",
        problem: "Student datasets may contain academic, demographic, and lifestyle attributes. Exploring these variables can help identify patterns associated with student grades.",
        tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
        objectives: [
            "Load and inspect student datasets.",
            "Check missing values, duplicates, and data types.",
            "Explore grade distributions and relevant variables.",
            "Create visualizations to communicate patterns.",
            "Document findings based on the actual analysis."
        ],
        workflow: [
            "Load the student datasets into Pandas.",
            "Inspect rows, columns, data types, and summary statistics.",
            "Check data quality and prepare the data.",
            "Perform exploratory data analysis.",
            "Visualize distributions and selected relationships.",
            "Summarize findings supported by the results."
        ],
        features: [
            "Dataset inspection and summary statistics.",
            "Data-quality checks.",
            "Exploratory analysis of academic outcomes.",
            "Charts showing selected distributions and relationships."
        ],
        learning: [
            "Loading and manipulating CSV files with Pandas.",
            "Performing exploratory data analysis.",
            "Creating charts with Matplotlib and Seaborn.",
            "Interpreting relationships without confusing correlation with causation."
        ]
    },

    {
        id: "data-cleaning",
        title: "Data Cleaning and Quality Checker",
        category: "Python Data Analysis",
        summary: "Inspect datasets for common data-quality issues and prepare records for analysis.",
        overview: "This Python project focuses on checking and improving data quality. It demonstrates how structured validation and cleaning steps can help make datasets more reliable for subsequent analysis.",
        problem: "Missing values, duplicate records, inconsistent formats, and incorrect data types can reduce the reliability of analysis.",
        tools: ["Python", "Pandas", "Jupyter Notebook", "Data Validation"],
        objectives: [
            "Inspect the structure and quality of a dataset.",
            "Identify missing values and duplicate records.",
            "Check data types and inconsistent entries.",
            "Apply suitable cleaning steps.",
            "Compare dataset quality before and after cleaning."
        ],
        workflow: [
            "Load the source dataset.",
            "Inspect columns, data types, and summary statistics.",
            "Identify missing, duplicated, or inconsistent records.",
            "Apply appropriate cleaning and validation rules.",
            "Review the cleaned dataset.",
            "Summarize the changes made."
        ],
        features: [
            "Dataset structure inspection.",
            "Missing-value checks.",
            "Duplicate-record detection.",
            "Data-type and consistency checks.",
            "Post-cleaning validation."
        ],
        learning: [
            "Using Pandas for data-quality checks.",
            "Handling missing and duplicated data.",
            "Choosing appropriate cleaning rules.",
            "Validating data transformations."
        ]
    },

    {
        id: "diwali-sales",
        title: "Diwali Sales Analysis",
        category: "Python Data Analysis",
        summary: "Analyze Diwali sales data to explore customer and purchasing patterns.",
        overview: "This project uses Python to explore a Diwali sales dataset. It focuses on preparing the data, examining available customer and transaction attributes, and visualizing patterns in purchasing behavior.",
        problem: "Sales records may contain many customer and transaction attributes. Exploratory analysis can help summarize patterns across the available groups.",
        tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
        objectives: [
            "Load and clean the sales dataset.",
            "Inspect customer and transaction attributes.",
            "Explore purchasing patterns across selected groups.",
            "Create visualizations of relevant sales measures.",
            "Report findings supported by the dataset."
        ],
        workflow: [
            "Load the sales data using Pandas.",
            "Inspect columns, data types, and missing values.",
            "Clean records and prepare analysis fields.",
            "Perform exploratory analysis of available attributes.",
            "Create charts for meaningful comparisons.",
            "Document the key observations."
        ],
        features: [
            "Sales dataset inspection and cleaning.",
            "Exploration of customer attributes.",
            "Group-wise comparisons where the data supports them.",
            "Visual summaries of purchasing patterns."
        ],
        learning: [
            "Cleaning real-world sales data.",
            "Grouping and aggregating data with Pandas.",
            "Using Seaborn and Matplotlib for visualization.",
            "Turning exploratory analysis into understandable insights."
        ]
    },

    {
        id: "amazon-sales-python",
        title: "Amazon Sales Analysis",
        category: "Python Data Analysis",
        summary: "Explore Amazon sales records using Python to understand sales performance and data patterns.",
        overview: "This project focuses on analyzing an Amazon-related sales dataset using Python. The specific metrics and conclusions depend on the fields contained in the source data.",
        problem: "Sales datasets can contain many records and attributes. Data analysis helps organize these records and identify useful patterns.",
        tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
        objectives: [
            "Inspect and prepare the source sales data.",
            "Identify data-quality issues.",
            "Explore relevant sales measures and categories.",
            "Visualize patterns present in the dataset.",
            "Document evidence-based observations."
        ],
        workflow: [
            "Load and inspect the source dataset.",
            "Check missing values, duplicates, and data types.",
            "Prepare the fields required for analysis.",
            "Calculate relevant summaries and comparisons.",
            "Create visualizations.",
            "Summarize findings based on the analysis."
        ],
        features: [
            "Sales data inspection.",
            "Data cleaning and preparation.",
            "Analysis of available sales metrics.",
            "Visual exploration of relevant categories and trends."
        ],
        learning: [
            "Using Pandas for sales analysis.",
            "Preparing datasets for exploratory analysis.",
            "Creating informative visualizations.",
            "Explaining results based on available evidence."
        ]
    },

    {
        id: "ecommerce-python",
        title: "E-commerce Sales Analysis",
        category: "Python Data Analysis",
        summary: "Use Python to explore e-commerce data, prepare records, and identify sales patterns.",
        overview: "This project uses Python-based data analysis to investigate an e-commerce dataset. It focuses on cleaning the data, examining relevant metrics, and presenting patterns through visualizations.",
        problem: "Online sales datasets can contain complex transaction records. Structured analysis helps summarize performance and investigate patterns in the available fields.",
        tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
        objectives: [
            "Load and inspect the e-commerce dataset.",
            "Check data quality and prepare relevant fields.",
            "Explore available sales and order metrics.",
            "Compare selected groups or categories.",
            "Visualize and summarize the findings."
        ],
        workflow: [
            "Load the source data into Pandas.",
            "Inspect columns, data types, and missing values.",
            "Clean and transform the required fields.",
            "Calculate summary metrics.",
            "Perform exploratory analysis and visualization.",
            "Document the results supported by the data."
        ],
        features: [
            "Dataset inspection and preparation.",
            "Exploratory analysis of sales data.",
            "Group-wise comparisons where appropriate.",
            "Visual summaries of selected metrics."
        ],
        learning: [
            "Working with transaction datasets.",
            "Data transformation with Pandas.",
            "Exploratory data analysis.",
            "Communicating results through charts."
        ]
    },

    // ========================================
    // CATEGORY 3: WEB DEVELOPMENT (4 PROJECTS)
    // ========================================

    {
        id: "employee-management",
        title: "Employee Management System",
        category: "Web Development",
        summary: "A frontend application concept for managing employee records and displaying workforce summaries.",
        overview: "This web project focuses on creating an employee management interface using HTML, CSS, and JavaScript. Its purpose is to organize employee information and provide an accessible interface for common record-management tasks.",
        problem: "Managing employee records manually can become difficult when information needs to be added, reviewed, updated, or removed.",
        tools: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation", "Local Storage if implemented"],
        objectives: [
            "Create an organized employee management interface.",
            "Display employee records in a structured layout.",
            "Support record creation, editing, and deletion where implemented.",
            "Present useful employee summary information.",
            "Make the interface responsive and easy to use."
        ],
        workflow: [
            "Design the page structure with HTML.",
            "Style the interface with CSS.",
            "Create employee record interactions with JavaScript.",
            "Implement and test the supported CRUD operations.",
            "Test form validation and responsive layouts."
        ],
        features: [
            "Employee record display.",
            "Employee creation and editing if implemented.",
            "Record deletion if implemented.",
            "Employee summary cards if implemented.",
            "Responsive interface."
        ],
        learning: [
            "Building interfaces with HTML and CSS.",
            "Handling user interactions with JavaScript.",
            "Working with arrays and DOM elements.",
            "Implementing and testing CRUD workflows."
        ]
    },

    {
        id: "ausbildung-tracker",
        title: "Ausbildung Application Tracker",
        category: "Web Development",
        summary: "A frontend tracker concept for organizing Ausbildung applications and monitoring their progress.",
        overview: "This project focuses on creating a web interface for tracking Ausbildung applications. It is intended to help users organize application information, deadlines, and application statuses in one place.",
        problem: "Applying to multiple opportunities can make it difficult to keep track of company details, application dates, follow-ups, and application status.",
        tools: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation", "Local Storage if implemented"],
        objectives: [
            "Create a structured application-tracking interface.",
            "Organize company and position information.",
            "Represent application progress through statuses.",
            "Make it easier to review upcoming deadlines.",
            "Provide a responsive and usable interface."
        ],
        workflow: [
            "Design the application dashboard.",
            "Create the application form and record layout.",
            "Use JavaScript to manage application data.",
            "Implement status updates and filtering where supported.",
            "Test data entry and responsive behavior."
        ],
        features: [
            "Application record management where implemented.",
            "Application status tracking.",
            "Deadline information where implemented.",
            "Search or filtering if implemented.",
            "Responsive dashboard layout."
        ],
        learning: [
            "Designing productivity-focused interfaces.",
            "Managing structured records in JavaScript.",
            "Handling forms and user input.",
            "Creating clear status-based workflows."
        ]
    },

    {
        id: "student-management",
        title: "Student Management System",
        category: "Web Development",
        summary: "A frontend application for organizing student records, marks, attendance, and summary information.",
        overview: "This project uses HTML, CSS, and JavaScript to build a student management interface. The planned workflow brings student information and academic records together in an organized dashboard.",
        problem: "Student information, marks, and attendance can become difficult to manage when stored across separate records or handled manually.",
        tools: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation", "Local Storage if implemented"],
        objectives: [
            "Display student records in a structured interface.",
            "Provide student record creation and editing where implemented.",
            "Organize marks and attendance information.",
            "Display relevant summary cards.",
            "Support record deletion and input validation where implemented."
        ],
        workflow: [
            "Build the page structure using HTML.",
            "Style the dashboard and forms using CSS.",
            "Manage student records with JavaScript.",
            "Implement the supported CRUD operations.",
            "Test marks, attendance, and summary calculations."
        ],
        features: [
            "Student record management.",
            "Marks and attendance information.",
            "Summary cards for relevant statistics.",
            "Record editing and deletion where implemented.",
            "Responsive frontend interface."
        ],
        learning: [
            "Building dashboard-style web interfaces.",
            "Managing records using JavaScript.",
            "Handling forms and validation.",
            "Working with summary calculations and DOM updates."
        ]
    },

    {
        id: "shopease",
        title: "ShopEase E-commerce Website",
        category: "Web Development",
        summary: "A frontend e-commerce website concept for browsing products and interacting with a shopping interface.",
        overview: "This project focuses on building an e-commerce user interface with HTML, CSS, and JavaScript. The goal is to create a clear product-browsing experience and implement shopping interactions appropriate to the project's scope.",
        problem: "An online shopping interface needs to present products clearly and make common browsing and purchasing interactions easy to understand.",
        tools: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
        objectives: [
            "Create an organized product catalogue.",
            "Design a responsive shopping interface.",
            "Support product interactions where implemented.",
            "Provide a clear navigation and browsing experience.",
            "Test the interface across different screen sizes."
        ],
        workflow: [
            "Design the page layout and product cards.",
            "Style the interface with responsive CSS.",
            "Add JavaScript interactions.",
            "Implement product filtering or cart functionality where supported.",
            "Test navigation and user interactions."
        ],
        features: [
            "Product catalogue interface.",
            "Product cards and browsing layout.",
            "Shopping cart interactions if implemented.",
            "Product filtering if implemented.",
            "Responsive frontend design."
        ],
        learning: [
            "Building product-focused interfaces.",
            "Creating reusable UI components with HTML and CSS.",
            "Handling shopping interactions with JavaScript.",
            "Testing responsive web layouts."
        ]
    }
];


// ============================================
// HELPER: CREATE AN HTML LIST
// Builds lists for objectives, workflow,
// features, and learning outcomes
// ============================================

function createList(items) {
    return `
        <ul class="detail-list">
            ${items.map(item => `<li>${item}</li>`).join("")}
        </ul>
    `;
}


// ============================================
// RENDER PROJECT DETAILS
// Displays the selected project's information
// ============================================

function renderProjectDetails(project) {
    const content = document.getElementById("project-detail-content");

    // Update the browser tab title
    document.title = `${project.title} | Shiv`;

    // Build the project details page
    content.innerHTML = `
        <section class="project-detail-hero">

            <p class="project-category-label">
                ${project.category}
            </p>

            <h1>${project.title}</h1>

            <p class="project-lead">
                ${project.summary}
            </p>

            <!-- Technology tags -->
            <div class="project-tech-tags">
                ${project.tools.map(tool => `<span>${tool}</span>`).join("")}
            </div>

            <!-- Project links -->
            <div class="project-detail-actions">
                <a
                    href="https://github.com/yadavshivkumar"
                    class="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer">
                    View GitHub Profile ↗
                </a>

                
            </div>

        </section>

        <!-- Project overview -->
        <section class="detail-section">
            <h2>Project Overview</h2>
            <p>${project.overview}</p>
        </section>

        <!-- Problem statement -->
        <section class="detail-section">
            <h2>Problem Statement</h2>
            <p>${project.problem}</p>
        </section>

        <!-- Objectives -->
        <section class="detail-section">
            <h2>Project Objectives</h2>
            ${createList(project.objectives)}
        </section>

        <!-- Tools and technologies -->
        <section class="detail-section">
            <h2>Tools &amp; Technologies</h2>

            <div class="detail-tools-grid">
                ${project.tools.map(tool => `
                    <article class="detail-tool-card">
                        <h3>${tool}</h3>
                    </article>
                `).join("")}
            </div>
        </section>

        <!-- Workflow -->
        <section class="detail-section">
            <h2>Implementation / Analysis Workflow</h2>
            ${createList(project.workflow)}
        </section>

        <!-- Features -->
        <section class="detail-section">
            <h2>Key Features / Analysis Areas</h2>
            ${createList(project.features)}
        </section>

        <!-- Project preview placeholder -->
        <section class="detail-section">
            <h2>Project Preview</h2>

            <div class="project-preview-placeholder">
                <p>
                    Project screenshots and visual previews
                    will be added here.
                </p>
            </div>
        </section>

        <!-- Learning outcomes -->
        <section class="detail-section">
            <h2>Key Learnings</h2>
            ${createList(project.learning)}
        </section>

        <!-- Return navigation -->
        <section class="detail-footer">
            <a href="projects.html" class="btn btn-primary">
                &larr; Back to All Projects
            </a>
        </section>
    `;
}


// ============================================
// INITIALIZE PROJECT DETAILS PAGE
// Reads the project ID from the URL
// ============================================

function initializeProjectDetails() {
    // Example URL:
    // project-details.html?id=student-performance
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("id");

    // Find the matching project in the data array
    const selectedProject = projectsData.find(
        project => project.id === projectId
    );

    // Get the container where content will appear
    const content = document.getElementById("project-detail-content");

    // Handle missing or invalid project IDs
    if (!selectedProject) {
        document.title = "Project Not Found | Shiv";

        content.innerHTML = `
            <section class="detail-section">
                <h1>Project Not Found</h1>

                <p>
                    We couldn't find that project.
                    Please return to the projects page and select a project.
                </p>

                <a href="projects.html" class="btn btn-primary">
                    Browse All Projects
                </a>
            </section>
        `;

        return;
    }

    // Render the selected project
    renderProjectDetails(selectedProject);
}


// ============================================
// RUN WHEN THE HTML PAGE HAS LOADED
// ============================================

document.addEventListener("DOMContentLoaded", initializeProjectDetails);
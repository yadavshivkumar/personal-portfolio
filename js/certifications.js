// Store all unique certificates in one place.
// Add a certificate only once, even if it appears on multiple profiles.

const certificates = [
    {
        title: "Introduction to Programming Using HTML",
        provider: "Simplilearn",
        platform: "Simplilearn",
        date: "October 2026",
        category: "web-development",
        credentialId: "",
        url: ""
    },

    {
        title: "Introduction to CSS",
        provider: "Simplilearn",
        platform: "Simplilearn",
        date: "October 2026",
        category: "web-development",
        credentialId: "",
        url: ""
    },
    
    
    {
        title: "JavaScript for Beginners",
        provider: "Simplilearn",
        platform: "Simplilearn",
        date: "October 2026",
        category: "web-development",
        credentialId: "",
        url: ""
    },
    

    {
        title: "Web Development for Beginners",
        provider: "Simplilearn",
        platform: "Simplilearn",
        date: "",
        category: "web-development",
        credentialId: "9065234",
        url: ""
    },
    
    {
        title: "Introduction to Generative AI",
        provider: "University of Colorado Boulder",
        platform: "Coursera",
        date: "June 2026",
        category: "other",
        credentialId: "P5O3FQPSQKV1",
        url: "https://www.coursera.org/account/accomplishments/verify/P5O3FQPSQKV1"
    },
    {
        title: "Creating a Budget with Microsoft Excel",
        provider: "Coursera",
        platform: "Coursera",
        date: "February 2026",
        category: "data-analytics",
        credentialId: "0ZT8EFFTBHNK",
        url: "https://www.coursera.org/account/accomplishments/verify/0ZT8EFFTBHNK"
    },
    {
        title: "Create a Simple Gantt Chart using Microsoft Excel",
        provider: "Coursera",
        platform: "Coursera",
        date: "February 2026",
        category: "data-analytics",
        credentialId: "RTPPRYAPDXXI",
        url: "https://www.coursera.org/account/accomplishments/verify/RTPPRYAPDXXI"
    },
    {
        title: "Create a Project Management Tracker using Microsoft Excel",
        provider: "Coursera",
        platform: "Coursera",
        date: "February 2026",
        category: "other",
        credentialId: "KHBRA92NAJ0I",
        url: "https://www.coursera.org/account/accomplishments/verify/KHBRA92NAJ0I"
    },
    {
        title: "Project Management: Creating the WBS",
        provider: "Coursera",
        platform: "Coursera",
        date: "February 2026",
        category: "other",
        credentialId: "WZ36YDE74FPW",
        url: "https://www.coursera.org/account/accomplishments/verify/WZ36YDE74FPW"
    },
    {
        title: "Business Analysis & Process Management",
        provider: "Coursera",
        platform: "Coursera",
        date: "February 2026",
        category: "other",
        credentialId: "XC3HNAHNAUVO",
        url: "https://www.coursera.org/account/accomplishments/verify/XC3HNAHNAUVO"
    },
    {
        title: "The Structured Query Language (SQL)",
        provider: "University of Colorado Boulder",
        platform: "Coursera",
        date: "February 2026",
        category: "data-analytics",
        credentialId: "CCKCXC2X2YUR",
        url: "https://www.coursera.org/account/accomplishments/verify/CCKCXC2X2YUR"
    },
    {
        title: "Chat with Your Data: Generative AI-Powered SQL Data Analysis",
        provider: "Vanderbilt University",
        platform: "Coursera",
        date: "February 2026",
        category: "data-analytics",
        credentialId: "DNC2XG4M873F",
        url: "https://www.coursera.org/account/accomplishments/verify/DNC2XG4M873F"
    },
    {
        title: "ChatGPT Advanced Data Analysis",
        provider: "Vanderbilt University",
        platform: "Coursera",
        date: "February 2026",
        category: "data-analytics",
        credentialId: "RWK6KM792N3D",
        url: "https://www.coursera.org/account/accomplishments/verify/RWK6KM792N3D"
    },
    {
        title: "ChatGPT + Excel: Master Data, Make Decisions, Tell Stories",
        provider: "Vanderbilt University",
        platform: "Coursera",
        date: "February 2026",
        category: "data-analytics",
        credentialId: "FE08N4XE08AY",
        url: "https://www.coursera.org/account/accomplishments/verify/FE08N4XE08AY"
    },
    {
        title: "Introduction to Structured Query Language (SQL)",
        provider: "University of Michigan",
        platform: "Coursera",
        date: "February 2026",
        category: "data-analytics",
        credentialId: "057XRI4E23HF",
        url: "https://www.coursera.org/account/accomplishments/verify/057XRI4E23HF"
    },
    {
        title: "Custom & Conditional Formatting in Microsoft Excel",
        provider: "Coursera",
        platform: "Coursera",
        date: "February 2026",
        category: "data-analytics",
        credentialId: "2E6KKCPCGNDU",
        url: "https://www.coursera.org/account/accomplishments/verify/2E6KKCPCGNDU"
    },
    {
        title: "Conditional Formatting, Tables and Charts in Microsoft Excel",
        provider: "Coursera",
        platform: "Coursera",
        date: "February 2026",
        category: "data-analytics",
        credentialId: "1J5EK57GQFM0",
        url: "https://www.coursera.org/account/accomplishments/verify/1J5EK57GQFM0"
    },
    {
        title: "Overview of Data Visualization",
        provider: "Coursera",
        platform: "Coursera",
        date: "February 2026",
        category: "data-analytics",
        credentialId: "OKI1KHLT8RWI",
        url: "https://www.coursera.org/account/accomplishments/verify/OKI1KHLT8RWI"
    },
    {
        title: "Using Date and Time Functions in Excel",
        provider: "Coursera",
        platform: "Coursera",
        date: "February 2026",
        category: "data-analytics",
        credentialId: "QY9S7EXBGPKJ",
        url: "https://www.coursera.org/account/accomplishments/verify/QY9S7EXBGPKJ"
    },
    {
        title: "Introduction to Business Analysis Using Spreadsheets: Basics",
        provider: "Coursera",
        platform: "Coursera",
        date: "February 2026",
        category: "data-analytics",
        credentialId: "Y4SJKU4WFJMV",
        url: "https://www.coursera.org/account/accomplishments/verify/Y4SJKU4WFJMV"
    },
    {
        title: "How to Use Lookup Reference Math and Text Functions in Excel",
        provider: "Coursera",
        platform: "Coursera",
        date: "February 2026",
        category: "data-analytics",
        credentialId: "D4JRR1RSBFD0",
        url: "https://www.coursera.org/account/accomplishments/verify/D4JRR1RSBFD0"
    },
    {
        title: "How to use Custom and Conditional Formatting in Excel",
        provider: "Coursera",
        platform: "Coursera",
        date: "February 2026",
        category: "data-analytics",
        credentialId: "QMN9P39IR9SP",
        url: "https://www.coursera.org/account/accomplishments/verify/QMN9P39IR9SP"
    },
    {
        title: "Introduction to Data Analysis using Microsoft Excel",
        provider: "Coursera",
        platform: "Coursera",
        date: "February 2026",
        category: "data-analytics",
        credentialId: "R870ZOKE4PAX",
        url: "https://www.coursera.org/account/accomplishments/verify/R870ZOKE4PAX"
    },
    {
        title: "Relational Database Design",
        provider: "University of Colorado Boulder",
        platform: "Coursera",
        date: "February 2026",
        category: "data-analytics",
        credentialId: "FIKPPZ42946H",
        url: "https://www.coursera.org/account/accomplishments/verify/FIKPPZ42946H"
    },
    {
        title: "Using Python to Access Web Data",
        provider: "University of Michigan",
        platform: "Coursera",
        date: "February 2026",
        category: "programming",
        credentialId: "C01FTPB04JPT",
        url: "https://www.coursera.org/account/accomplishments/verify/C01FTPB04JPT"
    },
    {
        title: "Python Data Structures",
        provider: "University of Michigan",
        platform: "Coursera",
        date: "February 2026",
        category: "programming",
        credentialId: "MVCFIOEUL52Y",
        url: "https://www.coursera.org/account/accomplishments/verify/MVCFIOEUL52Y"
    },
    {
        title: "Programming for Everybody (Getting Started with Python)",
        provider: "University of Michigan",
        platform: "Coursera",
        date: "February 2026",
        category: "programming",
        credentialId: "LO1GB48L0LHB",
        url: "https://www.coursera.org/account/accomplishments/verify/LO1GB48L0LHB"
    },
    {
        title: "IIT Guwahati BSc (Hons.) DS & AI Orientation Course",
        provider: "Indian Institute of Technology Guwahati",
        platform: "Coursera",
        date: "September 2025",
        category: "data-analytics",
        credentialId: "ITN9XGM13MF9",
        url: "https://www.coursera.org/account/accomplishments/verify/ITN9XGM13MF9"
    },
    
    {
        title: "Introduction to Data Analytics",
        provider: "Simplilearn",
        platform: "Simplilearn",
        date: "October 2026",
        category: "data-analytics",
        credentialId: "",
        url: ""
    },
    {
        title: "Data Analyst Course",
        provider: "Simplilearn",
        platform: "Simplilearn",
        date: "October 2025",
        category: "data-analytics",
        credentialId: "",
        url: ""
    },
    {
        title: "Excel Dashboard for Beginners",
        provider: "Simplilearn",
        platform: "Simplilearn",
        date: "October 2026",
        category: "data-analytics",
        credentialId: "",
        url: ""
    },
    
    {
        title: "Python for Beginners",
        provider: "Simplilearn",
        platform: "Simplilearn",
        date: "September 2025",
        category: "programming",
        credentialId: "9054763",
        url: ""
    },
    {
        title: "Naukri.com Certified: Masterclass – Interview Ready Excel-AI Skills for Amazon Analyst Role",
        provider: "Coding Ninjas",
        platform: "Coding Ninjas",
        date: "September 2025",
        category: "data-analytics",
        credentialId: "",
        url: ""
    },
    {
        title: "IBM Certified Project: Predict Risk of Diabetes",
        provider: "Coding Ninjas",
        platform: "Coding Ninjas",
        date: "September 2025",
        category: "data-analytics",
        credentialId: "",
        url: ""
    },
    {
        title: "AI Tools and Prompt Engineering",
        provider: "Be10x",
        platform: "Be10x",
        date: "July 2025",
        category: "other",
        credentialId: "",
        url: ""
    },
    {
        title: "Programming with Generative AI",
        provider: "United Latino Students Association",
        platform: "LinkedIn",
        date: "",
        category: "programming",
        credentialId: "AIOMRTFX9MRG",
        url: ""
    }
];

// Get the elements used for search, filtering, and displaying certificates.
const certificateGrid = document.getElementById("certificate-grid");
const searchInput = document.getElementById("certificate-search");
const categoryFilter = document.getElementById("certificate-category");
const resultCount = document.getElementById("certificate-results");
const noCertificatesMessage = document.getElementById("no-certificates");

// Create a certificate card safely using DOM elements.
function createCertificateCard(certificate) {
    const card = document.createElement("article");
    card.className = "certificate-item";
    card.dataset.category = certificate.category;

    const title = document.createElement("h3");
    title.textContent = certificate.title;
    card.appendChild(title);

    const provider = document.createElement("p");
    provider.textContent = certificate.provider;
    card.appendChild(provider);

    if (certificate.date) {
        const date = document.createElement("p");
        date.textContent = `Completed: ${certificate.date}`;
        card.appendChild(date);
    }

    if (certificate.credentialId) {
        const credential = document.createElement("p");
        credential.textContent = `Credential ID: ${certificate.credentialId}`;
        card.appendChild(credential);
    }

    // Only show a verification button when a real URL is available.
    if (certificate.url) {
        const link = document.createElement("a");
        link.href = certificate.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "Verify Certificate ↗";
        card.appendChild(link);
    } else {
        const note = document.createElement("p");
        note.className = "certificate-note";
        
        card.appendChild(note);
    }

    return card;
}

// Render all certificate cards into the grid.
function renderCertificates(list) {
    certificateGrid.replaceChildren();

    list.forEach((certificate) => {
        certificateGrid.appendChild(createCertificateCard(certificate));
    });

    resultCount.textContent = `Showing ${list.length} certificate(s)`;
    noCertificatesMessage.hidden = list.length !== 0;
}

// Filter certificates by title, provider, or credential ID.
function filterCertificates() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filteredCertificates = certificates.filter((certificate) => {
        const searchableText = [
            certificate.title,
            certificate.provider,
            certificate.platform,
            certificate.credentialId,
            certificate.date
        ].join(" ").toLowerCase();

        const matchesSearch = searchableText.includes(searchTerm);
        const matchesCategory =
            selectedCategory === "all" ||
            certificate.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    renderCertificates(filteredCertificates);
}

// Show all certificates when the page first loads.
renderCertificates(certificates);

// Update the displayed list as the user searches or changes category.
searchInput.addEventListener("input", filterCertificates);
categoryFilter.addEventListener("change", filterCertificates);
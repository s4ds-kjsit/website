// Example projects data
const projects = [
    {
        image: "Images/p1.png",
        title: "Leveraging Latent Diffusion Models for Dermatoglyphics Data Analysis",
        developers: "Prasad D. devkar, Aastha bhatt, Mahiman dave",
        description: "This study presents an innovative approach for fingerprint extraction and analysis from hospital forms, using the Segment Anything Model (SAM) and Topological Data Analysis (TDA). Synthetic data from the IISC Anguli dataset was first used to refine the methodology before applying it to real-world data from the Diabetes Unit, KEM Hospital Research Centre, Pune. Fingerprint segmentation using SAM isolates prints from complex backgrounds, with preprocessing steps improving clarity. Semantic sketches visually highlight critical dermatoglyphic details for feature identification. Minutiae points, such as ridge endings and bifurcations, are plotted to generate persistence barcodes, capturing essential fingerprint features. A distance matrix then evaluates similarities between fingerprints, enhancing biometric identification and verification. This research addresses technical challenges in medical data management, advancing biometric identification and improving healthcare data handling."
    },
    {
        image: "Images/p2.png",
        title: "Automated Answer Sheet Evaluation and Ranking System",
        developers: "Ashika Jain, Bhargavi Joshi, Sravan Kotta, Namitha Prakash, Aryan Ilake, Shreyas Konidala",
        description: "This research work introduces an innovative approach to educational assessment by development of an automated system for evaluating and ranking answer sheets. Inspired by the recent surge in LLM as a judge strategy, the system leverages the capabilities of the Gemini 1.5 Pro for Optical Character Recognition (OCR) and evaluation for precise and accurate assessment of answer sheets without human interference. The integration of necessary components has been implemented through Python, enhancing the efficiency and reliability of the evaluation process. The automated system significantly reduces human errors and biases, thereby providing a consistent and objective ranking of student performance. The results demonstrate that the system effectively delivers precise scores, addressing the common issues associated with manual evaluation."
    },
    {
        image: "Images/p3.png",
        title: "Development of an AI-Powered Question Bank for JEE and UPSC Examinations",
        developers: "Heer Panchal, Kinjal Panchal, Jhalak Dedhia, Adrita banerjee, Aniruddh Sengupta",
        description: "Description Unavailable"
    }
    // {
    //     image: "Images/n-a.png",
    //     title: "Development of an Interactive Chatbot and Survey System for Teacher Feedback",
    //     developers: "N/A",
    //     description: "Description Unavailable"
    // }
];



// Render projects dynamically
const projectsContainer = document.getElementById("projects-container");

projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="card-content">
            <h1>${project.title}</h1>
            <h3><strong>Developers:</strong> ${project.developers}</h3>
            <p><strong>Description:</strong> ${project.description}</p>
        </div>
    `;
// Add <p>${project.description}</p> to card.innerHTML when you're ready with descriptions
    projectsContainer.appendChild(card);
});

// Create overlay container dynamically
const overlay = document.createElement("div");
overlay.className = "card-overlay";
document.body.appendChild(overlay);

// Add click event listener to project cards
projectsContainer.addEventListener("click", (e) => {
    const card = e.target.closest(".project-card");
    if (!card) return; // Ensure only cards trigger the event

    const imageSrc = card.querySelector("img").src;
    const title = card.querySelector("h1").innerText;
    const developers = card.querySelector("h3").innerHTML;
    const description = card.querySelector("p:last-child").innerText;

    // Populate overlay with zoomed card content
    overlay.innerHTML = `
        <div class="zoomed-card">
            <img src="${imageSrc}" alt="${title}">
            <div class="content">
                <h3>${title}</h3>
                <p>${description}</p>
                <p>${developers}</p>
            </div>
            <button class="close-button">&times;</button>
        </div>
    `;

    overlay.style.display = "flex";

    // Add close functionality
    const closeButton = overlay.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
        overlay.style.display = "none";
        overlay.innerHTML = ""; // Clear content when closed
    });
});

// Ensure overlay closes when clicking outside the zoomed card
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.style.display = "none";
        overlay.innerHTML = ""; // Clear content when closed
    }
});

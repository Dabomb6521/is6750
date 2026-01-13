// Mock Job Data
const jobsData = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "TechFlow Solutions",
        location: "Logan, UT",
        type: "Full-Time",
        posted: "2 days ago",
        description: "We are looking for a skilled Frontend Developer to join our team. You will be responsible for building user-friendly interfaces and ensuring high performance.",
        requirements: ["React/Vue experience", "Strong CSS skills", "Git proficiency"]
    },
    {
        id: 2,
        title: "Administrative Assistant",
        company: "Utah State University",
        location: "Logan, UT",
        type: "Full-Time",
        posted: "5 days ago",
        description: "Provide administrative support to the department head. Manage schedules, coordinate meetings, and handle correspondence.",
        requirements: ["Proficient in MS Office", "Excellent communication skills", "Organized"]
    },
    {
        id: 3,
        title: "Marketing Intern",
        company: "Digital Peak",
        location: "Remote",
        type: "Internship",
        posted: "1 day ago",
        description: "Great opportunity for a student to learn digital marketing. You will assist with social media campaigns and content creation.",
        requirements: ["Marketing major", "Social media savvy", "Creative"]
    },
    {
        id: 4,
        title: "Data Analyst",
        company: "Insight Corp",
        location: "Salt Lake City, UT",
        type: "Full-Time",
        posted: "1 week ago",
        description: "Analyze complex datasets to identify trends and provide actionable insights. Work closely with the product team.",
        requirements: ["SQL", "Tableau/PowerBI", "Python is a plus"]
    },
    {
        id: 5,
        title: "Customer Support Representative",
        company: "ServiceNow Inc",
        location: "Remote",
        type: "Part-Time",
        posted: "3 days ago",
        description: "Assist customers with inquiries and technical issues via phone and chat. Flexible hours.",
        requirements: ["Customer service experience", "Patience", "Tech-savvy"]
    },
    {
        id: 6,
        title: "Campus ground keeper",
        company: "Utah State University",
        location: "Logan, ut",
        type: "Part-Time",
        posted: "2 weeks ago",
        description: "Maintain the beauty of the university campus. Mowing, planting, and general landscaping duties.",
        requirements: ["Ability to lift 50lbs", "Outdoor work experience", "Early riser"]
    }
];

// DOM Elements
const jobListContainer = document.getElementById('jobList');
const resultCount = document.getElementById('resultCount');
const searchInput = document.getElementById('searchInput');
const locationInput = document.getElementById('locationInput');
const searchBtn = document.getElementById('searchBtn');
const jobModal = document.getElementById('jobModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');
const sortSelect = document.getElementById('sortSelect');
const checkBoxes = document.querySelectorAll('input[type="checkbox"]');

// State
let filteredJobs = [...jobsData];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Only try to render jobs if the container exists (i.e., we are on index.html)
    if (jobListContainer) {
        renderJobs(filteredJobs);
        setupJobBoardListeners();
    }
});

function setupJobBoardListeners() {
    searchBtn.addEventListener('click', filterJobs);
    searchInput.addEventListener('input', filterJobs);
    locationInput.addEventListener('input', filterJobs);

    checkBoxes.forEach(cb => {
        cb.addEventListener('change', filterJobs);
    });

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            jobModal.style.display = 'none';
        });
    }

    if (jobModal) {
        window.addEventListener('click', (event) => {
            if (event.target == jobModal) {
                jobModal.style.display = 'none';
            }
        });
    }
}

// Render Jobs
function renderJobs(jobs) {
    if (!jobListContainer) return;

    jobListContainer.innerHTML = '';
    resultCount.textContent = `Showing ${jobs.length} Job${jobs.length !== 1 ? 's' : ''}`;

    if (jobs.length === 0) {
        jobListContainer.innerHTML = '<p class="no-results">No jobs found matching your criteria.</p>';
        return;
    }

    jobs.forEach(job => {
        const card = document.createElement('div');
        card.classList.add('job-card');
        card.innerHTML = `
            <h4>${job.title}</h4>
            <div class="company-name">${job.company}</div>
            <div class="job-meta">
                <span>📍 ${job.location}</span>
                <span>💼 ${job.type}</span>
                <span>🕒 ${job.posted}</span>
            </div>
            <p class="job-snippet">${job.description.substring(0, 100)}...</p>
            <button class="apply-btn-sm" onclick="event.stopPropagation(); viewJobDetails(${job.id})">View Details</button>
        `;
        card.addEventListener('click', () => viewJobDetails(job.id));
        jobListContainer.appendChild(card);
    });
}

// Filter Function
function filterJobs() {
    const searchText = searchInput.value.toLowerCase();
    const locationText = locationInput.value.toLowerCase();

    // Get checked job types
    const checkedTypes = Array.from(checkBoxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    filteredJobs = jobsData.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchText) ||
            job.company.toLowerCase().includes(searchText) ||
            job.description.toLowerCase().includes(searchText);
        const matchesLocation = job.location.toLowerCase().includes(locationText);

        const matchesType = checkedTypes.length === 0 || checkedTypes.includes(job.type);

        return matchesSearch && matchesLocation && matchesType;
    });

    // Sort - Placeholder logic
    const sortValue = sortSelect ? sortSelect.value : 'newest';
    // existing sort logic...

    renderJobs(filteredJobs);
}

// View Details (Modal)
function viewJobDetails(id) {
    const job = jobsData.find(j => j.id === id);
    if (!job || !jobModal) return;

    modalBody.innerHTML = `
        <h2>${job.title}</h2>
        <h4 style="color: var(--text-muted); margin-bottom: 1rem;">${job.company} - ${job.location}</h4>
        
        <div style="margin-bottom: 1.5rem;">
            <span style="background: var(--bg-light); padding: 5px 10px; border-radius: 4px; font-size: 0.9rem;">${job.type}</span>
            <span style="background: var(--bg-light); padding: 5px 10px; border-radius: 4px; font-size: 0.9rem; margin-left: 10px;">Posted ${job.posted}</span>
        </div>

        <h3>Description</h3>
        <p style="margin-bottom: 1.5rem; line-height: 1.6;">${job.description}</p>

        <h3>Requirements</h3>
        <ul style="margin-bottom: 2rem; padding-left: 1.5rem;">
            ${job.requirements.map(req => `<li>${req}</li>`).join('')}
        </ul>

        <button id="modalApplyBtn" style="background-color: var(--tech-blue); color: white; padding: 10px 20px; border: none; border-radius: 4px; font-size: 1rem; cursor: pointer;">Apply Now</button>
    `;

    jobModal.style.display = 'block';

    // Add event listener to the new button
    const applyBtn = document.getElementById('modalApplyBtn');
    applyBtn.addEventListener('click', () => {
        alert(`Application for ${job.title} at ${job.company} submitted successfully!`);
        jobModal.style.display = 'none';
    });
}

// Profile Page Logic
const profileForm = document.getElementById('profileForm');
if (profileForm) {
    const saveBtn = profileForm.querySelector('.btn-primary');
    const cancelBtn = profileForm.querySelector('.btn-secondary');

    saveBtn.addEventListener('click', () => {
        alert('Profile saved successfully!');
    });

    cancelBtn.addEventListener('click', () => {
        if (confirm('Discard changes?')) {
            location.reload();
        }
    });
}


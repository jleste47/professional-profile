document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.getElementById('greeting');
    let phrases = ["Hi!", "Bonjour!", "Hola!", "Guten Tag!", "Nǐ hǎo!", "Ciao!"];
    let index = 0;

    setInterval(() => {
        greeting.textContent = phrases[index];
        index = (index + 1) % phrases.length;
    }, 2000);
});

// Toggle Skills and Courses Section
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

// Attach event listeners to toggle buttons
document.getElementById("toggleSkills").addEventListener("click", () => toggleSection("skillsSection"));
document.getElementById("toggleCourses").addEventListener("click", () => toggleSection("coursesSection"));
document.getElementById("toggleSchedule").addEventListener("click", () => toggleSection("scheduleSection"));
document.getElementById("toggleFall").addEventListener("click", () => toggleSection("fallSection"));


// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

//Typing effect for Degree Program 
const jobTitleElement = document.querySelector(".job-title");
const jobTitleText = "Technical Communication | Interactive Design | Professional Writing";
let index = 0;
let isDeleting = false;

function typeEffect() {
    if (!isDeleting && index < jobTitleText.length) {
        // Typing effect: add one letter
        jobTitleElement.textContent += jobTitleText[index];
        index++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && index > 0) {
        // Deleting effect: remove one letter
        jobTitleElement.textContent = jobTitleText.substring(0, index - 1);
        index--;
        setTimeout(typeEffect, 50);
    } else {
        // Pause before switching between typing and deleting
        isDeleting = !isDeleting;
        setTimeout(typeEffect, 1000);
    }
}

// Start the typing effect when the page loads
document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});


// Scroll-to-top button functionality
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0; // Scroll to top
});

function checkFooterVisibility() {
    const footer = document.querySelector("footer");
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight) {
        footer.style.opacity = "1";
        footer.style.visibility = "visible";
    } else {
        footer.style.opacity = "0";
        footer.style.visibility = "hidden";
    }
}

// Run on scroll
window.addEventListener("scroll", checkFooterVisibility);


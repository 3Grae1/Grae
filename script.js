// Function to show a specific section and scroll to it
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections
    });
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block'; // Show the selected section
    activeSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section smoothly

    const tabs = document.querySelectorAll('.nav-link');
    tabs.forEach(tab => {
        tab.classList.remove('active'); // Remove active class from all tabs
    });
    const activeTab = Array.from(tabs).find(tab => tab.getAttribute('href').substring(1) === sectionId);
    if (activeTab) {
        activeTab.classList.add('active'); // Add active class to the selected tab
    }
}

// Add scroll event listener for animations
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.add('visible'); // Add visible class when in view
        } else {
            section.classList.remove('visible'); // Remove class when out of view
        }
    });
});

// Initial setup to show the home section
document.addEventListener('DOMContentLoaded', () => {
    showSection('home'); // Show the home section on page load
});

// Function to show a specific section and scroll to it
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections
    });
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block'; // Show the selected section
    activeSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section smoothly

    const tabs = document.querySelectorAll('.nav-link');
    tabs.forEach(tab => {
        tab.classList.remove('active'); // Remove active class from all tabs
    });
    const activeTab = Array.from(tabs).find(tab => tab.getAttribute('href').substring(1) === sectionId);
    if (activeTab) {
        activeTab.classList.add('active'); // Add active class to the selected tab
    }
}

// Add scroll event listener for animations
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.add('visible'); // Add visible class when in view
            // Check if the fade-in effect should be triggered
            const fadeInEffect = section.querySelector('.fade-in-effect');
            if (fadeInEffect && !fadeInEffect.classList.contains('animated')) {
                fadeInEffect.classList.add('animated'); // Add animated class to trigger fade-in effect
            }
        } else {
            section.classList.remove('visible'); // Remove class when out of view
        }
    });
});

// Initial setup to show the home section
document.addEventListener('DOMContentLoaded', () => {
    showSection('home'); // Show the home section on page load
});

const header = document.querySelector(".navbar")

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}


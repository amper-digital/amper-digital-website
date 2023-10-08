document.addEventListener('DOMContentLoaded', function () {
    const currentYearElement = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
});

function toggleTheme() {
    const themeStyle = document.getElementById('theme-style');
    const currentTheme = localStorage.getItem('theme');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const navToggle = document.getElementById('navbar-toggle-to-change');

    if (currentTheme === 'dark') {
        console.log('going from dark to light');
        localStorage.setItem('theme', 'light');
        themeStyle.href = ''; // Empty href will disable the stylesheet
        themeToggleBtn.innerHTML = '<span style="vertical-align: middle; font-size: medium;" aria-hidden="true" class="material-symbols-outlined mb-1">dark_mode</span> Dark mode';
        themeToggleBtn.className = 'btn btn-dark btn-sm';
        navToggle.className = 'navbar-toggler navbar-light';
        themeIcon.className = 'fa-solid fa-moon';
    } else {
        localStorage.setItem('theme', 'dark');
        themeStyle.href = getDarkCssPath(); // Use a function to get the correct path
        themeToggleBtn.innerHTML = '<span style="vertical-align: middle; font-size: medium;" aria-hidden="true" class="material-symbols-outlined mb-1">light_mode</span> Light mode';
        themeToggleBtn.className = 'btn btn-light btn-sm';
        navToggle.className = 'navbar-toggler navbar-dark';
        themeIcon.className = 'fa-solid fa-sun';
    }
}

// Function to determine the correct path to 'dark.css' based on the current HTML file's location
function getDarkCssPath() {
    const currentPagePath = window.location.pathname;
    const basePath = currentPagePath.includes('pages/') ? '../' : ''; // Adjust the relative path as needed
    return basePath + 'css/dark.css';
}

const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', toggleTheme);

const initialTheme = localStorage.getItem('theme');
if (initialTheme === 'dark') {
    const themeStyle = document.getElementById('theme-style');
    themeStyle.href = getDarkCssPath();
    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.innerHTML = '<span style="vertical-align: middle; font-size: medium;" aria-hidden="true" class="material-symbols-outlined mb-1">light_mode</span> Light mode';
    themeToggleBtn.className = 'btn btn-light btn-sm';
    navToggle.className = 'navbar-toggler navbar-dark';
} else {
    navToggle.className = 'navbar-toggler navbar-light';
}

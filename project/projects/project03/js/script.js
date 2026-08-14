const themeButton = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('profile-theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    document.documentElement.classList.add('dark-mode');
}

function updateThemeIcon() {
    const isDark = document.body.classList.contains('dark-mode');
    themeButton.textContent = isDark ? '☀' : '☾';
    themeButton.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

updateThemeIcon();

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.documentElement.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('profile-theme', isDark ? 'dark' : 'light');
    updateThemeIcon();
});

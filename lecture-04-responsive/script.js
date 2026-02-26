// script.js - simple interactivity for portfolio
// console messages, variables, functions, events, and state

console.log('Script loaded');

// state variables
let isDarkMode = false;      // theme state
let clickCount = 0;          // counter state

// useful constants
const THEME_CLASS = 'dark-theme';

// functions
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle(THEME_CLASS, isDarkMode);
    console.log('Theme toggled, dark mode is now', isDarkMode);
}

function incrementCounter() {
    clickCount += 1;
    console.log('Button clicked', clickCount, 'times');
    // we could update UI, but requirement says optional
}

function showGreeting() {
    console.log('Hello from showGreeting()');
}

// attach event handlers once DOM is ready
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM content loaded');
    const themeBtn = document.getElementById('theme-toggle');
    const counterBtn = document.getElementById('click-counter');

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            console.log('Theme button clicked');
            toggleTheme();
        });
    }
    if (counterBtn) {
        counterBtn.addEventListener('click', () => {
            console.log('Counter button clicked');
            incrementCounter();
        });
    }

    // call a function for demonstration
    showGreeting();
});

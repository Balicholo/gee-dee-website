// NAV DROP DOWN
document.getElementById('nav-toggle').addEventListener('click', function() {
    var dropdown = document.getElementById('dropdown-menu');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'flex';
    } else {
        dropdown.style.display = 'none';
    }
});

// TEXT CHANGING ANIMATION
let textIndex = 0;
const texts = ["2","5", "7", "9", "10+"];

setInterval(() => {
    const ratesElement = document.querySelector(".rates");
    ratesElement.textContent = texts[textIndex];

    textIndex = (textIndex + 1) % texts.length;
}, 2000); // 200ms = 2s
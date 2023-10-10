const menu = document.querySelector('.menu');


function toggleMenu() {
    navLink = document.querySelectorAll('.target');
    navLink.forEach((link) => {
        link.classList.toggle('change')
    });
}

// Event Listeners 
menu.addEventListener('click', toggleMenu);
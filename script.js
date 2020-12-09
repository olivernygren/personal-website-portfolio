const header = document.getElementById('header');

window.onscroll = function() {

    let top = window.scrollY;

    if (top >= 50) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

const desktopNav = document.querySelector('.desktop-nav');
const menuIcon = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');

menuIcon.addEventListener('click', () => {
    mobileNav.classList.toggle('change');
});







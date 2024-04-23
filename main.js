const menu = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const IconBars = document.querySelector('.icon-bars');
const IconClose = document.querySelector('.icon-close');

hamburgerMenu.addEventListener('click',displayMenu);
menu.addEventListener('click',displayMenu);

function displayMenu(){
    if(menu.classList.contains('tampil')) {
        menu.classList.remove('tampil');
        IconBars.style.display='inline';
        IconClose.style.display='none';
    } else {
        menu.classList.add('tampil');
        IconBars.style.display='none';
        IconClose.style.display='inline';
    }
}
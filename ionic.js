const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
   navbar.classList.toggle('show')
});
document.onscroll = () => {
    if(window.scrollY > 0) {
       document.querySelector('.header').classList.add('active');
    }
}

document.onload = () => {
   if (window.scrollY > 0) {
     document.querySelector('.header') .classList.add('active');
   } 
}
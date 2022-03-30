const navToggle = document.getElementById("nav__toggle");
const navLists = document.getElementById("nav__lists");
const NavBurgerLines = document.getElementById("nav__burger-lines");
const navItems =  document.querySelectorAll(".nav__item");
const header = document.getElementById("header");



navToggle.addEventListener("click", toggleMenu);
navItems.forEach(navItem => {
    navItem.addEventListener("click", toggleMenu);
});
window.onscroll = function () {scrollFunction()};


function toggleMenu(){
    navLists.classList.toggle("nav__lists--visible");
    NavBurgerLines.classList.toggle("nav--open");
};



function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.style.backgroundColor = "hsl(240, 2%, 92%)";
    }else {
        header.style.backgroundColor = "hsl(0, 0%, 98%)";
    }
};




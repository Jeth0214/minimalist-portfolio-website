const navToggle = document.getElementById("nav__toggle");
const navLists = document.getElementById("nav__lists");
const NavBurgerLines = document.getElementById("nav__burger-lines");
const navItems =  document.querySelectorAll(".nav__item");
const header = document.getElementById("header");
const bannerImage = document.getElementById("banner__image");


navToggle.addEventListener("click", toggleMenu);
navItems.forEach(navItem => {
    navItem.addEventListener("click", toggleMenu);
});
window.onscroll = function () {scrollFunction()};
window.onresize = function() { setBannerImage()};

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

function setBannerImage() {
    let width = window.innerWidth;
    let device = "";
    if(width < 376){
        device = "mobile"
    }else if(width > 375 &&width < 1150) {
            device = "tablet";
    }else if(width > 1151) {
        device = "desktop";
    }
    console.log(width);
    console.log(device);

    bannerImage.setAttribute("src", `../assets/images/homepage/${device}/image-homepage-hero.jpg`);
}

window.onload = function() {"load", setBannerImage()};


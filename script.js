
const scrolltotop_btn = document.querySelector(".scrollToTop-btn")
scrolltotop_btn.addEventListener("click", () => {
    //document.documentElement.scrollTop = 0;
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const menuBtn = document.querySelector(".menu-indicator");
nav = document.querySelector(".nav");
const navItems = document.querySelector(".nav a");
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    nav.classList.toggle("active");
});
// Nav Effects
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    if (window.scrollY > 300 || document.documentElement.scrollTop > 300) {
        scrolltotop_btn.style.display = "block";
    }
    if (window.scrollY <= 0 || document.documentElement.scrollTop <= 300) {
        scrolltotop_btn.style.display = "none";
    }
});
navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        nav.classList.remove("active")
    })
})
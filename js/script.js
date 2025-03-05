

//window.addEventListener("scroll", function(){
//scrollBtn.classList.toggle("active", window.scrollY > 500);
//});

//javascript for scroll back to top on click scroll-to-top button
/*
const scrolltotop_btn = document.querySelector(".scrollToTop-btn")
scrolltotop_btn.addEventListener("click", () => {
//document.body.scrollTop = 0;
//document.documentElement.scrollTop = 0;
scrolltotop_btn.style.opacity = 0;
});
*/
  const menuBtn = document.querySelector(".menu-indicator");
  nav = document.querySelector(".nav");
  const navItems = document.querySelector(".nav a");
  
  menuBtn.addEventListener("click", () => {
      alert('hello');
      menuBtn.classList.toggle("active");
      nav.classList.toggle("active");
  })

  // Nav Effects
  window.addEventListener("scroll", function(){
      const header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);

      //scrolltotop_btn.style.opacity = 1;
  })

  navItems.forEach((navItem) => {
      navItem.addEventListener("click", () => {
          menuBtn.classList.remove("active");
          nav.classList.remove("active")
      })
  })



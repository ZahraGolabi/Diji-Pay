const header = document.querySelector(".header-scroll");
const mainHeader = document.querySelector(".main-hedaer");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    mainHeader.style.width = "90%";
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.background = "rgba(242, 243, 246, 0.95)";
    header.style.backdropFilter = "blur(80px)";
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
    header.style.webkitBackdropFilter = "blur(20px)";
  } else {
    mainHeader.style.width = "100%";
    header.style.position = "relative";
    header.style.top = "auto";
    header.style.background = "transparent";
    header.style.backdropFilter = "none";
    header.style.webkitBackdropFilter = "none";
    header.style.boxShadow = "none";
  }
});


// sub menu 



const menuSpans = document.querySelectorAll(".menu-arrow-icon")
const closeMenu = document.querySelector(".close-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const showMobileMenu = document.querySelector(".show-mobile-menu")

const toggleSubMenu = (e) => {
const li = e.currentTarget.closest('li');
const menuContainer = li.querySelector('.menu-nav-mobile');
menuContainer.classList.toggle('submenu-mobile-open');
  
}

menuSpans.forEach((menu) => {
  menu.addEventListener("click", toggleSubMenu)
})

const showMenuHandler=()=>{
mobileMenu.classList.add("mobile-menu-visible")
}

const hideMenuHandler=()=>{
mobileMenu.classList.toggle("mobile-menu-hidden")
}

showMobileMenu.addEventListener("click",showMenuHandler)
closeMenu.addEventListener("click",hideMenuHandler)


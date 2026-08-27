const header = document.querySelector(".header-scroll");

window.addEventListener("scroll", () => {
  if (window.scrollY > 15) {
    header.style.top = "0px";
    header.style.background = "rgba(242, 243, 246, 0.95)";
    header.style.backdropFilter = "blur(80px)";
    header.style.webkitBackdropFilter = "blur(20px)";
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
  } else {
    header.style.top = "64px";
    header.style.background = "transparent";
    header.style.backdropFilter = "none";
    header.style.webkitBackdropFilter = "none";
    header.style.boxShadow = "none";
    header.style.borderBottom = "none";
  }
});

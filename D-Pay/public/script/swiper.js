const heroSlider = new Swiper('.hero-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.hero-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});


const miniSlider = new Swiper('.mini-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
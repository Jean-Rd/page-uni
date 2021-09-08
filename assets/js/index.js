var swiper = new Swiper(".slider-service", {
  slidesPerView:  1,
  spaceBetween: 20,
  allowTouchMove:false,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: false,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    520: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  }
});

var swiper = new Swiper(".slider-doc", {
  slidesPerView:  1,
  spaceBetween: 20,
  allowTouchMove:false,
  slidesPerGroup: 1,
  loop: true,
  centeredSlides: true,
  loopFillGroupWithBlank: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    520: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  }
});

var swiper = new Swiper(".slider-avisos", {
  slidesPerView:  1,
  spaceBetween: 20,
  allowTouchMove:true,
  slidesPerGroup: 1,
  centeredSlides: true,
  loop: true,
  loopFillGroupWithBlank: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    520: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  }
});
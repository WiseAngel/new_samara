let section__hero = new Vue({
  el: '#hero',
  data: {
    slides: []
  },
  beforeMount() {
    let addSlide = (() => {
      for (let i = 1; i <= 4; i++) {
        this.slides.push(`img/_hero/hero__slide_${i}.jpg`)
      }
    })();
  },
  mounted() {
    $('.hero__slider').slick({
      dots: false,
      arrow: false,
      autoplay: false,
      infinite: true,
      autoplaySpeed: 8000,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      prevArrow: '<button type="button" class="slick-prev slider__nav slider__nav_prev"><img src="img/_hero/slider__arrow_left.png" alt="Prev Slide" class="slider__nav_img"></button>',
      nextArrow: '<button type="button" class="slick-next slider__nav slider__nav_next"><img src="img/_hero/slider__arrow_right.png" alt="Next Slide" class="slider__nav_img"></button>'
    });
  },
});
let section__hero = new Vue({
  el: '#hero',
  data:{
    slides:[
      'img/_hero/hero__slide_1.jpg',
      'img/_hero/hero__slide_2.jpg',
      'img/_hero/hero__slide_3.jpg',
      'img/_hero/hero__slide_4.jpg'
    ]
  }
});

$('.hero__slider').slick({
  dots: false,
  arrow: false,
  autoplay: false,
  infinite: true,
  autoplaySpeed: 8000,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  prevArrow: '<button type="button" class="slick-prev slider__nav slider__nav_prev"><img src="../img/_hero/slider__arrow_left.png" alt="Prev Slide" class="slider__nav_img"></button>',
  nextArrow: '<button type="button" class="slick-next slider__nav slider__nav_next"><img src="../img/_hero/slider__arrow_right.png" alt="Next Slide" class="slider__nav_img"></button>'
});

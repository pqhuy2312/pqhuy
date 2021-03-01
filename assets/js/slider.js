
/* index */
  $('.slider').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    pauseOnHover:true,
    customPaging: function(slider, i) { 
      return '<div class="hide-on-mobile-tablet">' + $(slider.$slides[i]).attr('title') + '</div>';
    },
    prevArrow: '<div class="slider-arrow-custom slider-arrow-prev"><i class="fas fa-chevron-left"></i></div>',
    nextArrow: '<div class="slider-arrow-custom slider-arrow-next"><i class="fas fa-chevron-right"></i></div>',
});
$('.product-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: false,
  prevArrow: '<div class="slider-arrow-custom slider-arrow-prev"><i class="fas fa-chevron-left"></i></div>',
  nextArrow: '<div class="slider-arrow-custom slider-arrow-next"><i class="fas fa-chevron-right"></i></div>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ],
});
/* slider-main-mobile-multi-slide */
$('.slider-main-mobile.slider-main-mobile-multi-slide').slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  pauseOnHover:true,
  prevArrow: '<div class="slider-arrow-custom slider-arrow-prev"><i class="fas fa-chevron-left"></i></div>',
  nextArrow: '<div class="slider-arrow-custom slider-arrow-next"><i class="fas fa-chevron-right"></i></div>',
});

/* slider main mobile */
$('.slider-main-mobile').slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  pauseOnHover:true,
  prevArrow: '<div class="slider-arrow-custom slider-arrow-prev"><i class="fas fa-chevron-left"></i></div>',
  nextArrow: '<div class="slider-arrow-custom slider-arrow-next"><i class="fas fa-chevron-right"></i></div>',
});



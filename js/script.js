$(document).ready(function(){
  $('.slaider-plants').slick({
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        },
        breakpoint: 768,
        settings: {
          variableWidth: true,
          slidesToShow: 3,
          slidesToScroll: 2
        },
      }
    ]
  });
  $('.slaider-plants-2').slick({
    prevArrow: $('.prev-2'),
    nextArrow: $('.next-2'),
    slidesToShow: 4,
    slidesToScroll: 3,
     responsive: [
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        },
        breakpoint: 768,
        settings: {
          variableWidth: true,
          slidesToShow: 3,
          slidesToScroll: 2
        },
      }
    ]
  });
  $('.slaider-news').slick({
    prevArrow: $('.prev-news'),
    nextArrow: $('.next-news'),
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
  });
});
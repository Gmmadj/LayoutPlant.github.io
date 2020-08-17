$(document).ready(function(){
  $('.slaider-plants').slick({
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    slidesToShow: 4,
    slidesToScroll: 3,
    waitForAnimate: false,
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
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 1
        },
      }
    ]
  });
  $('.slaider-plants-2').slick({
    prevArrow: $('.prev-2'),
    nextArrow: $('.next-2'),
    slidesToShow: 4,
    slidesToScroll: 3,
    waitForAnimate: false,
     responsive: [
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        },
        breakpoint: 768,
        settings: {
          centerMode: true,
          variableWidth: true,
          slidesToShow: 2,
          slidesToScroll: 1
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
    waitForAnimate: false,
  });
  $(".navbar-toggler").on("click", function(){
        $(".header-top-mobil").toggleClass("nav-mobil-relative");
        $(".navbar-toggler").toggleClass("active");
        $('body,html').animate({scrollTop:0},800);
  });
});

var numCount = document.getElementById('num_count');
var plusBtn = document.getElementById('btn_plus');
var minusBtn = document.getElementById('btn_minus');
plusBtn.onclick = function() {
  var qty = parseInt(numCount.value);
  qty = qty + 1;
  numCount.value = qty;
}
minusBtn.onclick = function() {
  var qty = parseInt(numCount.value);
  if (qty > 1) {
    qty = qty - 1;
    numCount.value = qty;
  }
}
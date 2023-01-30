$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    nav: true,
    dots: true,
    smartSpeed: 900,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1400: {
        items: 3,
      },
    },
  });
});

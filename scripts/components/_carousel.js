// $(".owl-carousel.one").owlCarousel({
//   items: 1,
//   loop: false,
//   margin: 20,
//   autoplay: false,
//   nav: true,
//   dots: false,
//   smartSpeed: 900,
//   navText: [
//     "<i class='fa fa-chevron-left'></i>",
//     "<i class='fa fa-chevron-right'></i>",
//   ],
//   responsive: {
//     0: {
//       items: 1,
//     },
//     768: {
//       items: 1,
//     },
//     992: {
//       items: 2,
//     },
//     1200: {
//       items: 1,
//     },
//     1400: {
//       items: 1,
//     },
//   },
// });

// $(".owl-carousel.two").owlCarousel({
//   items: 2,
//   loop: false,
//   margin: 20,
//   autoplay: false,
//   nav: true,
//   dots: false,
//   smartSpeed: 900,
//   navText: [
//     "<i class='fa fa-chevron-left'></i>",
//     "<i class='fa fa-chevron-right'></i>",
//   ],
//   responsive: {
//     0: {
//       items: 1,
//     },
//     768: {
//       items: 1,
//     },
//     992: {
//       items: 2,
//     },
//     1200: {
//       items: 2,
//       margin: 30,
//     },
//     1400: {
//       items: 2,
//       margin: 30,
//     },
//   },
// });

// $(".owl-carousel").owlCarousel({
//   items: 1,
//   loop: false,
//   margin: 20,
//   autoplay: false,
//   nav: true,
//   dots: false,
//   smartSpeed: 900,
//   navText: [
//     "<i class='fa fa-chevron-left'></i>",
//     "<i class='fa fa-chevron-right'></i>",
//   ],
//   responsive: {
//     0: {
//       items: 1,
//     },
//     768: {
//       items: 1,
//     },
//     992: {
//       items: 1,
//     },
//     1200: {
//       items: 1,
//     },
//     1400: {
//       items: 1,
//     },
//   },
// });

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

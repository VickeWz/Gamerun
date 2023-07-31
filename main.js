(function () {
  "use strict";

  var carousels = function () {
    var $owl = $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        680: {
          items: 2,
          nav: false,
          loop: false, // Set loop to false for two items breakpoint
        },
        1000: {
          items: 3, // Display only three items at a time
          nav: true,
        },
      },
    });

    // Function to switch to the next slide
    var switchToNextSlide = function () {
      $owl.trigger("next.owl.carousel");
    };

    // Switch the slide every 5 seconds and loop the behavior
    var intervalId = setInterval(switchToNextSlide, 2000);

    // Handle the carousel when user hovers over it to prevent switching while hovering
    $owl.on("mouseenter", function () {
      clearInterval(intervalId);
    });

    $owl.on("mouseleave", function () {
      intervalId = setInterval(switchToNextSlide, 2000);
    });
  };

  // Initialize the carousel
  (function ($) {
    carousels();
  })(jQuery);
})();

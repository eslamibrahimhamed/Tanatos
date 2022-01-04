$(document).ready(function () {
  // lazy loading for Images

  $(function () {
    $("img").unveil(200, function () {
      $(this).animate(
        {
          opacity: 1,
        },
        800
      );
    });
  });

  // scroll Top With Button

  $(window).on("scroll", function () {
    var sc = $(window).scrollTop(),
      top = $(".scroll-top");
    if (sc >= 500) {
      top.fadeIn();
    } else {
      top.fadeOut();
    }
    top.on("click", function () {
      $(window).scrollTop(0);
    });
  });

  // Trigger Nice Scroll
  $("html").niceScroll({
    cursorcolor: "#f7600e",
    cursorwidth: "10px",
    cursorborderradius: "1px",
    cursorborder: "1px solid #f7600e",
    mousescrollstep: 50,
  });

  // Change Header Height

  var myHeader = $(".header");

  myHeader.height($(window).height());

  $(window).resize(function () {
    myHeader.height($(window).height());

    // Auto Change .intro position To Center   |
    $(".intro").height(function () {
      $(this).css(
        "paddingTop",
        ($(window).height() - $(".intro").height()) / 2
      );
    });

    // Auto Change .Arrow  position To Center |
    $(".arrow").width(function () {
      $(this).css("paddingLeft", ($(window).width() - $(".arrow").width()) / 2);
    });
  });

  // Auto Change .intro position To Center   ||

  $(".intro").height(function () {
    $(this).css("paddingTop", ($(window).height() - $(".intro").height()) / 2);
  });

  // Auto Change .Arrow  position To Center

  $(".arrow").width(function () {
    $(this).css("paddingLeft", ($(window).width() - $(".arrow").width()) / 2);
  });

  // Scroll Down To Features With Arrow

  $(".header .arrow i").click(function () {
    $("html").animate(
      {
        scrollTop: $(".features").offset().top,
      },
      1000
    );
  });

  // Scroll Down To our-works With button

  $(".header .work").click(function () {
    $("html").animate(
      {
        scrollTop: $(".our-works").offset().top,
      },
      1000
    );
  });

  // Scroll Down To Hire US With button

  $(".header .hire-us").click(function () {
    $("html").animate(
      {
        scrollTop: $(".hire").offset().top,
      },
      1000
    );
  });

  // Fade In  .Hidden

  $(".show").click(function () {
    $(".hidden").css({
      opacity: 1,
      height: "100%",
      transition: "all 0.7s ease-in-out",
    });
  });

  // Fade OUT .show (button)
  $(".show").click(function () {
    $(this).fadeOut();
  });

  // slider Change With Arrow

  var leftArrow = $(".testimonials .fa-chevron-left"),
    rightArrow = $(".testimonials .fa-chevron-right");

  function checkClients() {
    if ($(".client:first").hasClass("active")) {
      leftArrow.fadeOut(1);
    } else {
      leftArrow.fadeIn();
    }

    if ($(".client:last").hasClass("active")) {
      rightArrow.fadeOut(1);
    } else {
      rightArrow.fadeIn();
    }
  }

  checkClients();

  $(".testimonials i").click(function () {
    if ($(this).hasClass("fa-chevron-right")) {
      $(".testimonials .active").fadeOut(500, function () {
        $(this)
          .removeClass("active")
          .next(".client")
          .addClass("active")
          .fadeIn();
        checkClients();
      });
    } else {
      $(".testimonials .active").fadeOut(500, function () {
        $(this)
          .removeClass("active")
          .prev(".client")
          .addClass("active")
          .fadeIn();
        checkClients();
      });
    }
  });

  
});

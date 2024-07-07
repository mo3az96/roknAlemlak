$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  /***** Menu *****/
  if ($(window).width() <= 767) {
    $(".menu-btn").click(function () {
      $(".header-nav").addClass("active");
      $("body").addClass("overflow");
      $(".overlay").fadeIn();
    });
    $(".close-btn,.overlay").click(function () {
      $(".header-nav").removeClass("active");
      $("body").removeClass("overflow");
      $(".overlay").fadeOut();
    });
    $(".has-children .nav-link").click(function (e) {
      e.stopPropagation();
      e.preventDefault();
      $(".has-children .nav-link").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".has-children .nav-link").not(this).siblings().slideUp(500);
    });
  }

  /***** main slider *****/
  var mainSwiper = new Swiper(".main-slider .swiper", {
    spaceBetween: 10,
    loop: true,
    speed: 500,
    // autoplay: {
    //   delay: 5000,
    // },
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
  });

  /***** general slider *****/
  var generalSwiper = new Swiper(".general-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 18,
      },
      1450: {
        slidesPerView: 6,
        spaceBetween: 18,
      },
    },
    pagination: {
      el: ".general-slider .swiper-pagination",
      clickable: true,
    },
  });

  /***** lattest slider *****/
  var lattestSwiper = new Swiper(".lattest-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 18,
      },
      1450: {
        slidesPerView: 6,
        spaceBetween: 18,
      },
    },
    pagination: {
      el: ".lattest-slider .swiper-pagination",
      clickable: true,
    },
  });

  /***** bestseller slider *****/
  var bestsellerSwiper = new Swiper(".bestseller-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 18,
      },
      1450: {
        slidesPerView: 6,
        spaceBetween: 18,
      },
    },
    pagination: {
      el: ".bestseller-slider .swiper-pagination",
      clickable: true,
    },
  });

  /***** brands slider *****/
  var brandsSwiper = new Swiper(".brands-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 15,
      },
      1450: {
        slidesPerView: 6,
        spaceBetween: 25,
      },
    },
    pagination: {
      el: ".brands-slider .swiper-pagination",
      clickable: true,
    },
  });

  /***** Footer *****/
  if ($(window).width() <= 767) {
    $(".nav-foot-header").click(function () {
      $(".nav-foot-header").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".nav-foot-header").not(this).siblings().slideUp(500);
    });
  }

  /***** Scroll To Top *****/
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $(".toTop").addClass("showToTop");
    } else {
      $(".toTop").removeClass("showToTop");
    }
  });

  $(".toTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });
});

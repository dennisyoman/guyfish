// JavaScript Document

$(document).ready(function () {
  //menu
  $("#mmb").click(function () {
    $(this).toggleClass("active");
    $("#header").toggleClass("active");
  });

  //scroll to top
  $("#gotop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  //fish-effect
  if ($("#fishHolder").length > 0) {
    $("#fishHolder").fishAnimation();
    $("#fishHolder").fishAnimation("update", "scaleRange", 3);
  }

  //scroll
  $(window).scroll(function () {
    scrollFn();
  });

  //resize trigger
  $(window).resize(function () {
    resizeScreen();
  });

  //fixed jump bg
  if (navigator.userAgent.match(/Trident\/7\./)) {
    // if IE
    $("body").on("mousewheel", function () {
      // remove default behavior
      event.preventDefault();

      //scroll without smoothing
      var wheelDelta = event.wheelDelta;
      var currentScrollPosition = window.pageYOffset;
      window.scrollTo(0, currentScrollPosition - wheelDelta);
    });
  }

  //initialize swipers when document ready
  if ($(".swiper-updates").length > 0) {
    var updateSwiper = new Swiper(".swiper-updates", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 60,
      autoHeight: true,
      speed: 600,
      // If we need pagination
      pagination: {
        el: ".swiper-updates .swiper-pagination",
        clickable: true,
      },
    });
  }

  //initialize swipers when document ready
  if ($(".swiper-carousel").length > 0) {
    var carouselSwiper = new Swiper(".swiper-carousel", {
      slidesPerView: "auto",
      spaceBetween: 0,
      loop: true,
      centeredSlides: true,
      autoHeight: true,
      autoplay: {
        delay: 3000,
      },
      // If we need pagination
      pagination: {
        el: ".swiper-carousel .swiper-pagination",
        clickable: true,
      },
    });
  }

  //判斷臉書icon
  if (is_iPhone_or_iPad()) {
    $(".android").hide();
    $(".top").addClass("notfixed");
  } else {
    $(".iphone").hide();
  }

  VanillaTilt.init(document.querySelectorAll(".vt"), {
    max: 10,
    //scale: 2,
    speed: 6000,
    reset: false,
    gyroscope: false,
    //axis: "x",
    reverse: true,
  });
  VanillaTilt.init(document.querySelectorAll(".vtf"));

  //init
  resizeScreen();
  scrollFn();
  Wow.init();
});

function toggleSideInfo() {
  $("#sideInfo").toggleClass("active");
  $("#filter").removeClass("active");
}

function toggleFilter() {
  $("#filter").toggleClass("active");
  $("#sideInfo").removeClass("active");
}

function addVideo() {
  var ytID = "gM4VF7uvEdg";
  if ($(".ytbg").length > 0) {
    if ($(window).width() >= 900) {
      $(".ytbg").html(
        '<iframe src="https://www.youtube.com/embed/' +
          ytID +
          "?vq=hd720&controls=0&mute=1&showinfo=0&rel=0&autoplay=1&loop=1&playlist=" +
          ytID +
          '" allowfullscreen></iframe>'
      );
    } else {
      $(".ytbg").html();
    }
  }
}

function resizePool() {
  if ($("#fishHolder").length > 0) {
    windowW = $(window).width();
    windowH = $(window).height();
    var gameCanvas = document.getElementById("fishHolder");
    gameCanvas.width = windowW;
    gameCanvas.height = windowH;
    $("#mainHolder").css("width", windowW);
    $("#mainHolder").css("height", windowH);
    $("#fishHolder").fishAnimation("update", "canvasW", windowW);
    $("#fishHolder").fishAnimation("update", "canvasH", windowH);
  }
}

function is_iPhone_or_iPad() {
  return (
    navigator.platform.indexOf("iPhone") != -1 ||
    navigator.platform.indexOf("iPad") != -1
  );
}

var lastScrollTop = 0;
var bannerSwiper;
function scrollFn() {
  if (
    document.body.scrollTop > 40 ||
    document.documentElement.scrollTop > 40 ||
    $(".top").length < 1
  ) {
    $("#header").addClass("fixtop");
  } else {
    $("#header").removeClass("fixtop");
  }
}

//
function atTopDetect() {
  if ($("#banner").length >= 1) {
    $("#header").addClass("atIndex");
    if ($(window).scrollTop() >= dh) {
      $("#header").removeClass("atTop");
    } else {
      $("#header").addClass("atTop");
    }
  }
}

function resizeScreen() {
  addVideo();
  resizePool();
}

// Wow
var Wow = (function () {
  "use strict";

  // Handle Wow
  var handleWow = function () {
    var wow = new WOW({
      boxClass: "wow",
      offset: 0,
      mobile: true,
      tablet: true,
      live: true,
    });
    wow.init();
  };

  return {
    init: function () {
      handleWow(); // initial setup for counter
    },
  };
})();

(function ($) {
  jQuery.fn.setfocus = function () {
    return this.each(function () {
      var dom = this;
      setTimeout(function () {
        try {
          dom.focus();
        } catch (e) {}
      }, 0);
    });
  };
})(jQuery);

window.onload = function () {};

$(window).on("load", function () {

  "use strict";

  /* ===================================
          Loading Timeout
   ====================================== */

  $('.side-menu').removeClass('hidden');

  setTimeout(function () {
    $('.preloader').fadeOut();
  }, 1000);

});

function toggle() {
  var header = document.getElementById("header");
  header.classList.toggle("active");
}


// Scroll Button Start
var myButton = document.getElementById("myBtn");
window.onscroll = function () { Jishu() };
function Jishu() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}
function Joydip() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Scroll Button End

// skill slider start
$(window).scroll(function () {
  var hT = $('#skill-bar-wrapper').offset().top,
    hH = $('#skill-bar-wrapper').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > (hT + hH - 1.4 * wH)) {
    jQuery(document).ready(function () {
      jQuery('.skillbar-container').each(function () {
        jQuery(this).find('.skills').animate({
          width: jQuery(this).attr('data-percent')
        }, 5000); // 5 seconds
      });
    });
  }
});

// skill slider End


// Counter Start
// $(window).on("load resize", function () {

//   var counters = $(".count");
//   var countersQuantity = counters.length;
//   var counter = [];

//   for (i = 0; i < countersQuantity; i++) {
//     counter[i] = parseInt(counters[i].innerHTML);
//   }

//   var count = function (start, value, id) {
//     var localStart = start;
//     setInterval(function () {
//       if (localStart < value) {
//         localStart++;
//         counters[id].innerHTML = localStart;
//       }
//     }, 4);
//   }

//   for (j = 0; j < countersQuantity; j++) {
//     count(0, counter[j], j);
//   }
// });


$('.count').each(function () {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {
    duration: 6000,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});
// Counter Start End

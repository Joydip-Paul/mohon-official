function toggle() {
  var header = document.getElementById("header");
  header.classList.toggle("active");
}


// Scroll Button
var myButton = document.getElementById("myBtn");
window.onscroll = function() {Jishu()};
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
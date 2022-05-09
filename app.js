window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav-links").style.top = "0";
  } else {
    document.getElementById("nav-links").style.top = "-50px";
  }
}
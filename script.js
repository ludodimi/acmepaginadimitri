var myCarousel = document.querySelector(".carousel");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: true
});

function scrolltotop() {
  window.scrollTo(0, 0);
}
function scrolltobottom() {
    window.scrollTo(6000, 6000);
}

function showText() {
  var cookietext=document.getElementById("cookietext");
        cookietext.classList.remove("hidden");
  
}
function hideText() {
 var cookietext=document.getElementById("cookietext");
  cookietext.classList.add("hidden");
}





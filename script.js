function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

productions_images.addEventListener("scroll", function () {
  var maxScrollLeft = this.scrollWidth - this.clientWidth;
  if (this.scrollLeft > 0) {
    to_left.style.opacity = 0.8;
  } else {
    to_left.style.opacity = 0;
  }
  if (this.scrollLeft == maxScrollLeft) {
    to_right.style.opacity = 0;
  } else {
    to_right.style.opacity = 0.8;
  }
});
function slideToRight() {
  productions_images.scrollLeft += 350;
}
function slideToLeft() {
  productions_images.scrollLeft -= 350;
}

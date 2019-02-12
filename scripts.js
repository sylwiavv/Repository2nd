  // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
    document.getElementById("back2Top").style.display = "block";
  } else {
    document.getElementById("back2Top").style.display = "none";
  }
}

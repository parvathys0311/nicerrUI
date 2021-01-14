var elem2 = document.getElementById("seekerButton2");

const mediaQuery2 = window.matchMedia('(orientation:landscape)')
function Change(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    elem2.innerHTML = "Get Started";
  }
  else {
    elem2.innerHTML = "<i class=\"fas fa-angle-double-right\"></i>";
  }
}
// Register event listener
mediaQuery2.addListener(Change)
Change(mediaQuery2)

var elem = document.getElementById("seekerButton");

const mediaQuery = window.matchMedia('(orientation:landscape)')
function handleScreenChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    elem.innerHTML = "Get Started";
  }
  else {
    elem.innerHTML = "<i class=\"fas fa-angle-double-right\"></i>";
  }
}
// Register event listener
mediaQuery.addListener(handleScreenChange)
handleScreenChange(mediaQuery)



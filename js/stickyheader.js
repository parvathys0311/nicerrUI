// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// // Get the navbar
var navbar = document.getElementById("head");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    console.log(">")
    navbar.classList.add("sticky")
  } else {
    console.log("<")
    navbar.classList.remove("sticky");
  }
}

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("head").style.fontSize = "30px";
//   } else {
//     document.getElementById("head").style.fontSize = "90px";
//   }
}
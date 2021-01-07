window.addEventListener('scroll', checkHeader);

function checkHeader() { 
  let scrollPosition = Math.round(window.scrollY);
  if (scrollPosition > 114){
    document.querySelector('header').classList.add('sticky');
  }
  // If not, remove "sticky" class from header
  else {
    document.querySelector('header').classList.remove('sticky');
  } 
};
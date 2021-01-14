var mql = window.matchMedia("(max-width: 830px)");
function matches()
{
    var elem = document.getElementById("seekerButton");
    // elem.innerHTML = mql.matches ? "<img src=\"./images/go.svg\" width=\"20px\" style=\"color: white;\">" : "Get Started";
    elem.innerHTML = mql.matches ?"<i class=\"fas fa-angle-double-right\"></i>": "Get Started";
}
mql.onchange = matches;
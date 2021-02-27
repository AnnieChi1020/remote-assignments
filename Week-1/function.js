function myFunction() {
  var x = document.getElementById("myMainnav");
  if (x.className === "main-nav") {
    x.className += "responsive";
  } else {
    x.className = "main-nav";
  }
}
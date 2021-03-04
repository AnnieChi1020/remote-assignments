document.querySelector('div.banner').addEventListener('click', () => {
  document.querySelector('h1.headline').textContent = 'Have a Good Time!';
} );

function myFunction() {
  var x = document.getElementById("myMainnav");
  if (x.className === "main-nav") {
    x.className += " responsive";
  } else {
    x.className = "main-nav";
  }
}




const headline = document.querySelector('h1.headline');
const banner = document.querySelector('.banner');


headline.addEventListener('click', () => {
  headline.textContent = 'Have a Good Time!';
} );

function myFunction() {
  var x = document.getElementById("myMainnav");
  if (x.className === "main-nav") {
    x.className += " responsive";
  } else {
    x.className = "main-nav";
  }
}




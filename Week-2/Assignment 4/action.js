// function myFunction() {
//    var x = document.getElementById("myMainnav");
//    if (x.className === "main-nav") {
//      x.className += " responsive";
//    } else {
//      x.className = "main-nav";
//    }
//  }
 

const banner = document.querySelector('div.banner') ;
const headline = document.querySelector('h1.headline') ;
var hidden = document.querySelector('.hidden');
var action = document.querySelector('.action');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.mobile-menu');
const close = document.querySelector('.close');


banner.addEventListener('click', () => {
   if (headline.textContent == 'Meet the Quokka'){
      headline.textContent = 'Have a Good Time!';
   } else {
      headline.textContent = 'Meet the Quokka';
   }
} );

action.addEventListener('click', ()=> {
  if(hidden.style.display == ' ' || hidden.style.display == 'none'){
    hidden.style.display = 'flex';
  } else {
    hidden.style.display = 'none';
  }
});

burger.addEventListener('click', ()=> {
   close.style.display = 'block';
   close.style.zIndex = '9999';
   nav.style.display = 'block';
   nav.style.zIndex = '3';
})

close.addEventListener('click', ()=> {
   nav.style.display = 'none';
   close.style.display = 'none';
})

 
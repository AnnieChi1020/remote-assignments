const banner = document.querySelector('div.banner') ;
const headline = document.querySelector('h1.headline') ;

banner.addEventListener('click', () => {
  if (headline.textContent == 'Meet the Quokka') {
  headline.textContent = 'Have a Good Time!';
  } else if (headline.textContent == 'Have a Good Time!') {
  headline.textContent = 'Meet the Quokka';
  }
} );

const banner = document.querySelector('div.banner') ;
const headline = document.querySelector('h1.headline') ;

banner.addEventListener('click', () => {
   headline.textContent = 'Have a Good Time!';
} );

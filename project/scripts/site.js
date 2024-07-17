const nav1 = document.querySelector('.nav1')
const nav2 = document.querySelector('.nav2')
const hambutton = document.querySelector('#menu');
const head= document.querySelector('header')

hambutton.addEventListener('click', () => {
	nav1.classList.toggle('show');
    nav2.classList.toggle('show');
	hambutton.classList.toggle('show');

});
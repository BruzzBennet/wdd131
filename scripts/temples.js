document.getElementById("currentyear").innerHTML = new Date().getFullYear();

document.getElementById("lastModified").innerHTML = new Date(document.lastModified);

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
const title = document.querySelector('#title');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
    title.classList.toggle('hide');
});
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

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: [2005, "August", 7],
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: [1888, "May", 21],
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: [2015, "June", 7],
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: [2020, "May", 2],
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: [1974, "November", 19],
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: [1986, "January", 10],
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: [1983, "December", 2],
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	// Add more temple objects here...
  ];

const hometemple = document.querySelector('#hometemple');
const newtemple = document.querySelector('#newtemple');
const old = document.querySelector('#old');
const large = document.querySelector('#large');
const small = document.querySelector('#small');

CreateTempleCard(temples);

  hometemple.addEventListener('click', () => {
	CreateTempleCard(temples);
  });

  large.addEventListener('click', () => {
	CreateTempleCard(temples.filter(temple => temple.area > 90000));
  });

  small.addEventListener('click', () => {
	CreateTempleCard(temples.filter(temple => temple.area < 10000));
  });


  old.addEventListener('click', () => {
	CreateTempleCard(temples.filter(temple=>temple.dedicated[0]<2000));
  });

  newtemple.addEventListener('click', () => {
	CreateTempleCard(temples.filter(temple=>temple.dedicated[0]>2000));
  });

  function CreateTempleCard(filtered){
	document.querySelector("#temples").innerHTML="";
	filtered.forEach(temple =>{
		let card = document.createElement('div')
		let templeName = document.createElement("h2");
		let location = document.createElement("p");
		let dedicated = document.createElement("p");
		let area = document.createElement("p");
		let image = document.createElement("img");

		card.setAttribute("class","fig")
		templeName.textContent = temple.templeName;
		location.innerHTML=`<span class="label">Location:</span> ${temple.location}`;
		dedicated.innerHTML=`<span class="label">Dedicated:</span> ${temple.dedicated}`;
		area.innerHTML=`<span class="label">Area:</span> ${temple.area}`;
		image.setAttribute("src", temple.imageUrl);
		image.setAttribute("alt", `${temple.templeName} Temple`);
		image.setAttribute("loading","lazy");
		
		card.appendChild(templeName);
		card.appendChild(location);
		card.appendChild(dedicated);
		card.appendChild(area);
		card.appendChild(image);

		document.querySelector('#temples').appendChild(card);
  	})
  }
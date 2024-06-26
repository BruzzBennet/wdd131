document.getElementById("currentyear").innerHTML = new Date().getFullYear();

document.getElementById("lastModified").innerHTML = new Date(document.lastModified);

const temp = document.querySelector('#temp');
const wind = document.querySelector('#wind');
const windchill = document.querySelector('#windchill');
const T = 28
const V = 6

temp.textContent=T + "°C";
wind.textContent=V + " km/h";

function WindChill (T,V) {
    return 13.12 + (0.6215 * T) - (11.37 * V ^0.16) + (0.3965 * T) * V^0.16;
} 

if (T<=10 && V>4.8)
{        
    windchill.textContent=WindChill(T,V) + "°C";
} else {
    windchill.textContent="N/A";
}





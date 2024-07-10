document.getElementById("currentyear").innerHTML = new Date().getFullYear();

document.getElementById("lastModified").innerHTML = new Date(document.lastModified);

const selector = document.getElementById("select");

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

function displayList(productlist){
    // document.querySelector("#selector").innerHTML="";
    productlist.forEach(element => {
        let option = document.createElement("option");
        option.textContent=element.name;
        option.setAttribute("value",element.id);
        document.querySelector("select").appendChild(option);
    });
}

displayList(products);

let count=Number(localStorage.getItem("reviews")) || 0;

document.querySelector("#button").addEventListener('click', () => {
	count++;
  });

localStorage.setItem("reviews",count);
document.getElementById("reviewcount").textContent=count;
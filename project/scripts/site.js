const nav1 = document.querySelector('.nav1')
const nav2 = document.querySelector('.nav2')
const hambutton = document.querySelector('#menu');
const head= document.querySelector('header')

hambutton.addEventListener('click', () => {
	nav1.classList.toggle('show');
    nav2.classList.toggle('show');
	hambutton.classList.toggle('show');

});

const games = [
    {
        logo:"images/Deckmonlogo.webp",
        alt:"Deckmon game logo",
        description:"A Monster-Catching, Battle-Royale-Game that can be played with up to 6 players!",
        Players:"2-6",
        GameType:"Family Card Game",
        Contains:"108 cards and an Instruction Manual",
        Available:true,
        ref:"https://www.facebook.com/profile.php?id=61560558923318"
    },
    {
        logo:"images/MMlogo.webp",
        alt:"Monster Master game logo",
        description:"A TCG that mixes Kamen Rider with Pokemon and Megaman",
        Players:"2 (Both players need a deck)",
        GameType:"Trading Card Game",
        Contains:"60 cards and an Instruction Manual",
        Available:false,
        ref:"https://www.instagram.com/bennet.arts/"
    },
    {
        logo:"images/D5logo.webp",
        alt:"Defeat 5 game logo",
        description:"A family card game about forming superhero teams and being the first player to defeat five villains with them",
        Players:"2-4",
        GameType:"Family Card Game",
        Contains:"108 cards and an Instruction Manual",
        Available:false,
        ref:"https://www.instagram.com/bennet.arts/"
    }
]

CreateGameList(games);

function CreateGameList(list){
    document.getElementById("games").innerHTML="";
    list.forEach(element => {
        let card= document.createElement("div");
        let image = document.createElement("img");
        let desc = document.createElement("p");
        let players = document.createElement("div");
        let type = document.createElement("div");
        let contains = document.createElement("div");
        let available = document.createElement("p");
        let button = document.createElement("a");

        image.setAttribute("loading","lazy");
        image.setAttribute("height","150");
        image.setAttribute("alt",element.alt);
        image.setAttribute("src",element.logo);

        desc.innerHTML=element.description;
        
        players.innerHTML=`<p>Players:</p><p> ${element.Players}</p>`;
        players.setAttribute("class","details");

        type.innerHTML=`<p>Game Type:</p><p> ${element.GameType}</p>`;
        type.setAttribute("class","details");

        contains.innerHTML=`<p>Contains:</p><p> ${element.Contains}</p>`;
        contains.setAttribute("class","details");

        available.innerHTML="(This game is currently not available, but you can try it out on TableTop Simulator!)";

        card.appendChild(image);
        card.appendChild(desc);
        card.appendChild(players);
        card.appendChild(type);
        card.appendChild(contains);
        button.setAttribute("class","button");
        button.setAttribute("href",element.ref);
        if (element.Available==true){
            button.innerHTML="Get yours now!";
        }
        else{
            button.innerHTML="Try it out!";
            card.appendChild(available);
        }
        card.appendChild(button);
            
        document.getElementById('games').appendChild(card);
    });
};
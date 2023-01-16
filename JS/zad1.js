//1
const zmiana = document.querySelector("header");
console.log({zmiana});
zmiana.style.backgroundColor="yellow";
//2
const zmiana1 = document.querySelector("header h1");
console.log(zmiana1);
zmiana1.style.fontFamily="Arial Black";
zmiana1.innerHTML= "Preambuła";
//3
const zmiana3 = document.querySelectorAll("section");
console.log(zmiana3);
for(const section of zmiana3) {
    section.style.border = "2px solid brown";
}
//4
const zmiana4 = document.querySelector("section.main_column h1");
console.log(zmiana4);
zmiana4.innerHTML="Specjalność szefa:";
//5
const zmiana5 = document.createElement("p");
zmiana5.innerHTML="kebab na frytkach _-_";
console.log(zmiana5);
const zmiana51 = document.querySelector(".main_column");
console.log(zmiana51);
zmiana51.appendChild(zmiana5);
//6
const zmiana6 = document.querySelectorAll("section.side_column h1");
console.log({zmiana6});
zmiana6[1].remove();
// 7
const elementdiv = document.createElement("div");
elementdiv.style.backgroundColor="pink";
console.log({elementdiv});
const szukiwaniefooter = document.querySelector("footer");
console.log(szukiwaniefooter);
szukiwaniefooter.appendChild(elementdiv);
const elementp = document.createElement("p");
elementp.innerHTML="&copy";
console.log({elementp});
const szukaniediv = document.querySelector("div");
szukaniediv.appendChild(elementp);

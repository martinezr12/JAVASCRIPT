// zad1
const przycisk = document.querySelector("#butt1");
przycisk.addEventListener('click', () => {
zad1();
});
function zad1(){
    const zad11 = document.querySelector("h6");
    zad11.innerHTML="<i>Świetnie!</i>";
}
// zad 2
const przycisk1 = document.querySelector("#butt2");
przycisk1.addEventListener('click', () => {
    zad2();
});
function zad2(){
    const zad21 = document.querySelector("h5");
    zad21.innerText="<i>Świetnie!</i>";
}
// zad3
document.querySelector("#butt3").addEventListener("click", function () {

    const containerForTagnameExample = document.querySelector("#przyklad3");

    const containerElements = containerForTagnameExample.querySelectorAll("*");

    console.log(containerElements);

    for (const el of containerElements) {
        if (el.tagName === "STRONG") {
            el.style.border="10px dotted green";
        }
    }
});
// zad 4
document.querySelector("#butt4").addEventListener("click", function () {

    const zad4 = document.querySelector("#przyklad4");
    alert(zad4.title);
    console.log(zad4);
});
// zad 5
document.querySelector("#butt5").addEventListener("click", function () {
 const zad5 = document.querySelector("#przyklad5");
 zad5.setAttribute("dir", "rtl");
 console.log(zad5)
});
// zad6
document.querySelector("#butt6").addEventListener("click", function () {
    const zad6 = document.querySelector("#input1");
    zad6.toggleAttribute("disabled");
    const przycisk = document.querySelector("#butt6");
    if (zad6.hasAttribute("disabled")) {
        przycisk.innerHTML='edycja nie jest możliwa';
    }
    else {
        przycisk.innerHTML='można edytować';
    }
});
// zad7
document.querySelector("#butt7").addEventListener("click", function () {
const szukaniestyl = document.querySelector("#przyklad7");
szukaniestyl.removeAttribute("style")
const szukaniehref = document.querySelector("#przyklad71");
szukaniehref.removeAttribute("href")
});
// zad8
document.querySelector("#butt8").addEventListener("click", function () {
    const szukaniedata = document.querySelector("#przyklad8")
    console.log(szukaniedata.dataset);
    console.log(szukaniedata.attributes);
    const szukaniediv = document.querySelector("#przyklad81")
    for (const atrybuty of szukaniedata.attributes){
        let para = document.createElement("p");
        para.innerHTML = "atrybuty: <b>" + atrybuty.nodeName
        + "</b> ma wartość: </b>" + atrybuty.nodeValue + "</b>";
        szukaniediv.appendChild(para);
    }
});
// zad9
document.querySelector("#butt9").addEventListener("click", function () {
    let kolor = "#";
    const mozliweLiczby = "0123456789abcdef";
    for (let i = 0; i < 6; i++) {
        kolor += mozliweLiczby[Math.floor(Math.random() * 16)];
    }
    console.log(kolor);
    document.querySelector("#kolorowanka").style.backgroundColor = kolor;

});
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
    zad6.toggleAttribute("disabled", "")
    const wcisnietyprzycisk = document.querySelector(zad6);
    // if ()
});
// zad1
const przycisk = document.querySelector("#butt1");
przycisk.addEventListener('click', () => {
zad1();
});
function zad1(){
    const zad11 = document.querySelector("h6");
    zad11.innerHTML="<i>Świetnie!</i>";
}
const przycisk1 = document.querySelector("#butt2");
// zad2
przycisk1.addEventListener('click', () => {
    zad2();
});
function zad2(){
    const zad21 = document.querySelector("h5");
    zad21.innerText="<i>Świetnie!</i>";
}
// zad3
document.querySelector("#butt3").addEventListener("click", function () {

    const containerForTagnameExample = document.getElementsByTagName("strong");

    const containerElements = containerForTagnameExample.querySelectorAll("*");

    console.log(containerElements);

    for (const el of containerElements) {
        if (el.tagName === "STRONG") {
            el.style.border="10px dotted green";
        }
    }
});
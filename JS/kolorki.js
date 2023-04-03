const pokazywanie = document.getElementById("pokazywanie");
const text = document.getElementById("zmiana");
const text1 = document.getElementById("zmiana1");
const text2 = document.getElementById("zmiana2")
document.getElementById("pokazywanie").addEventListener('change', function () {
    if (pokazywanie.checked) {
        text.style.color='black';
        text.style.textShadow='';
        text1.style.color='black';
        text1.style.textShadow='';
        text2.style.color='black';
        text2.style.textShadow='';
        console.log("pokazany")
    } else {
        text.style.textShadow='0px 0px 9px grey';
        text.style.color='transparent';
        text1.style.textShadow='0px 0px 9px grey';
        text1.style.color='transparent';
        text2.style.textShadow='0px 0px 9px grey';
        text2.style.color='transparent';
        console.log("ukryty")
    }
})
// SLICE
const szukanietekstuslice = document.getElementById("tekstslice").innerText;
document.querySelector("#submit1").addEventListener("click", function () {
    alert(szukanietekstuslice.slice(26, 36));
});
document.querySelector("#submit2").addEventListener("click", function () {
    alert(szukanietekstuslice.slice(-12, -5));
});
// SUBSTRING
const szukanietekstusubstring = document.getElementById("tekstsubstring").innerText;
document.querySelector("#submit3").addEventListener("click", function () {
    alert(szukanietekstusubstring.substring(9, 19));
});
document.querySelector("#submit4").addEventListener("click", function () {
    alert(szukanietekstusubstring.substring(27));
});
// SUBSTR
const szukanietekstusubstr = document.getElementById("tekstsubstr").innerText;
document.querySelector("#submit5").addEventListener("click", function () {
    alert(szukanietekstusubstr.substr(27, 36));
});
document.querySelector("#submit6").addEventListener("click", function () {
    alert(szukanietekstusubstr.substr(37));
});
// REPLACE
const szukanietekstureplace = document.getElementById("tekstreplace").innerText;
document.querySelector("#submit7").addEventListener("click", function () {
    const wynik = szukanietekstureplace.replace('Microsoft', 'Januszex')
    document.getElementById("tekstreplace").innerHTML = wynik;
});
document.querySelector("#submit8").addEventListener("click", function () {
    const wynik1 = szukanietekstureplace.replace('Edge', 'Janusz Explorer')
    document.getElementById("tekstreplace").innerHTML = wynik1;
});
// REPLACEALL
const szukanietekstureplaceall = document.getElementById("tekstreplaceall").innerText;
document.querySelector("#submit9").addEventListener("click", function () {
    document.getElementById("tekstreplaceall").innerHTML =
        szukanietekstureplaceall.replaceAll('Microsoft', 'JanuszPol');
});
// touppercase i tolowercase
const szukanietekstuzmiana = document.getElementById("tekstzmiana").innerText;
document.querySelector("#submit10").addEventListener("click", function () {
document.getElementById("tekstzmiana").innerHTML = szukanietekstuzmiana.toUpperCase();
});
document.querySelector("#submit11").addEventListener("click", function () {
    document.getElementById("tekstzmiana").innerHTML = szukanietekstuzmiana.toLowerCase();
});
document.querySelector("#submit12").addEventListener("click", function () {
    document.getElementById("tekstzmiana").innerHTML = szukanietekstuzmiana;
});
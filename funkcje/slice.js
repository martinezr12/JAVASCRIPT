// SLICE
const szukanietekstuslice = document.getElementById("tekstslice").innerText;
document.querySelector("#submit1").addEventListener("click", function () {
alert(szukanietekstuslice.slice(26,36));
});
document.querySelector("#submit2").addEventListener("click", function () {
    alert(szukanietekstuslice.slice(-12,-5));
});
// SUBSTRING
const szukanietekstusubstring = document.getElementById("tekstsubstring").innerText;
console.log(szukanietekstusubstring)
document.querySelector("#submit3").addEventListener("click", function () {
    alert(szukanietekstusubstring.substring(9,19));
});
document.querySelector("#submit4").addEventListener("click", function () {
    alert(szukanietekstusubstring.substring(27));
});
// SUBSTR
const szukanietekstusubstr = document.getElementById("tekstsubstr").innerText;
document.querySelector("#submit5").addEventListener("click", function () {
    alert(szukanietekstusubstr.substr(27,36));
});
document.querySelector("#submit6").addEventListener("click", function () {
    alert(szukanietekstusubstr.substr(37));
});
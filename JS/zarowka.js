document.querySelector("#wlacz").addEventListener("click", function () {
document.getElementById("zarowka").src="zapalona.png";
document.getElementById("radiowlacz").checked="true";
document.getElementById("check").checked="true";
});
document.querySelector("#wylacz").addEventListener("click", function () {
    document.getElementById("zarowka").src="zgaszona.png";
    document.getElementById("radiowylacz").checked="false";
    document.getElementById("check").checked="false";
});
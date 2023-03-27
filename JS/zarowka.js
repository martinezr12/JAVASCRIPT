// przyciski
document.querySelector("#wlacz").addEventListener("click", function () {
    document.getElementById("zarowka").src = "zapalona.png";
    document.getElementById("radiowlacz").checked = "true";
    document.getElementById("check").checked = true;

});
document.querySelector("#wylacz").addEventListener("click", function () {
    document.getElementById("zarowka").src="zgaszona.png";
    document.getElementById("radiowylacz").checked="false";
    document.getElementById("check").checked = false;
});
// radio
document.querySelector("#wylacz1").addEventListener("click", function () {
    document.getElementById("zarowka").src="zagaszona.png";
    document.getElementById("radiowlacz").checked="false";
    document.getElementById("check").checked = false;
});
document.querySelector("#wlacz1").addEventListener("click", function () {
    document.getElementById("zarowka").src="zapalona.png";
    document.getElementById("radiowlacz").checked="true";
    document.getElementById("check").checked = true;
});
// checkbox
document.querySelector("#wylacz1").addEventListener("click", function () {
    document.getElementById("zarowka").src="zgaszona.png";
    document.getElementById("radiowylacz").checked="false";
});
document.getElementById("labelcheck").innerText="Wyłączona";
document.getElementById("check").checked = false;
document.getElementById("check").addEventListener('change', function (){
    document.getElementById("check").toggleAttribute("cheked");
    if (document.getElementById("check").checked){
        document.getElementById("zarowka").src="zapalona.png";
        document.getElementById("labelcheck").innerText = "Włączona";
        document.getElementById("radiowlacz").checked = "true";
    } else {
        document.getElementById("zarowka").src="zgaszona.png";
        document.getElementById("labelcheck").innerText="Wyłączona";
        document.getElementById("radiowylacz").checked = true;
    }
})

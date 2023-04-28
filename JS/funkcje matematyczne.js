const liczba = prompt("Podaj liczbę rzeczywistą");
const szukanieklasy = document.getElementsByClassName("liczby");
for (const num of szukanieklasy){
    num.innerText = liczba
}
// abs
const szukanieabs = document.getElementById("abswynik");
szukanieabs.textContent = Math.abs(liczba)
// ceil
const szukanieceil = document.getElementById("ceilwynik");
szukanieceil.textContent = Math.ceil(liczba)
// floor
const szukaniefloor = document.getElementById("floorwynik");
szukaniefloor.textContent = Math.floor(liczba)
// max
const szukaniemax = document.getElementById("maxwynik");
szukaniemax.textContent = Math.max(liczba)
// min
const szukaniemin = document.getElementById("minwynik");
szukaniemin.textContent = Math.min(liczba)
// pow
const szukaniepow = document.getElementById("powwynik");
szukaniepow.textContent = Math.pow(liczba,2)
// round
const szukanieround = document.getElementById("roundwynik");
szukanieround.textContent = Math.round(liczba)
// sqrt
const szukaniesqrt = document.getElementById("sqrtwynik");
szukaniesqrt.textContent = Math.sqrt(liczba)

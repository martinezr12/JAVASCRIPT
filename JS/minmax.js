const liczbamin = prompt("Podaj liczbę całkowitą");
const liczbamax = prompt("Podaj większa liczbę całkowita")
const szukaniemin = document.getElementById("liczbamin");
szukaniemin.textContent = Math.round(liczbamin)
const szukaniemax = document.getElementById("liczbamax");
szukaniemax.textContent = Math.round(liczbamax)





// const szukanieklasy = document.getElementsByClassName("liczby");
// for (const num of szukanieklasy){
//     num.innerText = liczba
// }
const szukanieprzycisku = document.getElementById("przycisk");
const szukaniewyniku = document.getElementById("wynik");
const szukanie = document.getElementById("sprawdzanie");
const parzysta = document.getElementById("parzysta");
const dziesiatki = document.getElementById("dziesiatki");
szukanieprzycisku.addEventListener('click', function (){
const min = 1;
const max = 30;
const liczba = Math.floor(Math.random() * (max - min+1)) +min;
szukaniewyniku.textContent = liczba
    console.log(liczba);
if (liczba>=20){
    szukanie.innerText='Wylosowania liczba jest większa lub równa 20'
}else{
    szukanie.innerText=''
}
if (liczba % 2 === 0){
    parzysta.innerText='Wylosowana liczba jest liczbą parzystą'
}else{
    parzysta.innerText='Wylosowana liczba jest liczbą nieparzystą'
}
if (liczba<=9){
    dziesiatki.innerText='Wylosowana liczba jest w pierwszej dziesiątce'
}else if (liczba<=19){
    dziesiatki.innerText='Wylosowana liczba jest w drugiej dziesiątce'
}else if (liczba<=29){
    dziesiatki.innerText='Wylosowana liczba jest w trzeciej dziesiątce'
}else {
    dziesiatki.innerText='Wylosowana liczba jest w czwartej dziesiątce'
}


});


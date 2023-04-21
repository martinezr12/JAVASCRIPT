const min = 1;
const max = 15;
const miesiacliczba = Math.floor(Math.random() * (max - min+1)) +min;
const szukanieh = document.getElementById("miesiac");
const szukaniewyniku = document.getElementById("wynikmiesiac");
szukanieh.textContent = miesiacliczba;
switch (miesiacliczba){
    case 1:
    case 2:
    case 3:
        szukaniewyniku.innerText='I kwartał';
        break;
    case 4:
    case 5:
    case 6:
        szukaniewyniku.innerText='II kwartał';
        break;
    case 7:
    case 8:
    case 9:
        szukaniewyniku.innerText='III kwartał';
        break;
    case 10:
    case 11:
    case 12:
        szukaniewyniku.innerText='IV kwartał';
        break;
    default:
        szukaniewyniku.innerText='Błędny numer miesiąca'
}
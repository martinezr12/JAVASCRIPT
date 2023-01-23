function fun() {
    alert("Możesz być z siebie dumny");
}

const okno = document.querySelector("#alert");
console.log(okno);
okno.addEventListener('click', () => {
    fun();
});

function oknoconfirm() {
    if (confirm("Czy jesteś pewien, że chcesz kontynować?")) {
        alert("No to kontynuuj...");
    } else {
        alert("Przykro mi, że nie chcesz kontynuować...");
    }
}

const okno1 = document.querySelector("#confirm");
console.log(okno1);
okno1.addEventListener('click', () => {
    oknoconfirm();
});

function oknoprompt() {
    const imie = prompt("Podaj swoje imię:");
    if (imie){
        alert("Witaj " + imie);
    } else {
        alert("Anulowałeś akcję, a okienko zwróciło " + imie);
    }

}

const okno2 = document.querySelector("#prompt");
console.log(okno2);
okno2.addEventListener('click', () => {
    oknoprompt()
});



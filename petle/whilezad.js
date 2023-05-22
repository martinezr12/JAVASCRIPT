document.querySelector("#submit").addEventListener("click", function () {
    const tabela = document.getElementById("tabel");
    tabela.innerHTML = '';
    console.log("wszedlem")
    const kolumnyinput = document.getElementById("kolumny")
    const kolumny = parseInt(kolumnyinput.value)
    console.log("Liczba kolumn " + kolumny)
    let k = 1;
    const wierszinput = document.getElementById("wiersz")
    const wiersz = parseInt(wierszinput.value)
    console.log("Liczba wierszy " + wiersz)
    let w = 1;

    while (w <= wiersz) {
        const tworzeniewierszy = document.createElement("tr")
        w++;
        while (k <= kolumny) {
            const tworzeniekolumny = document.createElement("td")
            tworzeniekolumny.innerHTML = ''+ k;
            k++;
            tworzeniewierszy.appendChild(tworzeniekolumny);
        }
        tabela.appendChild(tworzeniewierszy);
        k = 1;
    }
});
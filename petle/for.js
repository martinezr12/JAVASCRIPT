for (let i = 1; i <= 100; i++){
    const formularz1 = document.getElementById("formularz")
    const tworzenie = document.createElement("input")
    tworzenie.id='input' + i;
    tworzenie.name='input' + i;
    tworzenie.placeholder='Element' + i;
    tworzenie.style.boxShadow='5px 5px lightblue';
    tworzenie.style.margin='10px';
    formularz1.appendChild(tworzenie);
    if(i % 5===0){
        const br = document.createElement("br");
        formularz1.appendChild(br);
    }
}
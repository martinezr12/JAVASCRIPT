console.log("Witaj świecie");
console.log(window);
console.log("Witaj",window,100);
console.table([1, 2, 3, 4, 5]);
console.group("grupa1");
console.log("Ala ma kota");
console.log("Kot ma Alę");
console.groupEnd();
console.groupCollapsed("grupa2");
console.log("Ala ma kota");
console.log("Kot ma Alę");
console.groupEnd();
console.time("test 1");
for (let i = 0; i < 100000; i++){
    ;
}
console.timeEnd("test 1")
function test(){
    let i = 0;
    //debugger;//przerywa w tym miejscu działanie kodu
}
test();
//zmienne
var text = "ala";
text = "Janek ma żyrafę";
console.log({text});
let a = 0;
a = 10;
const b = 0;
//b = 10; do stałej nie możemy przypisać nowej wartości
console.log(b);
const name = "Ala";

const tab = [1,2,3];
tab[3] = 4;
tab.push(5, 6);
console.log(tab);
//tab = [1, 2, 3, 4, 5, 6]; nie możemy zmienić wartości istniejącej tablicu
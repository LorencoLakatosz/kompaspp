let number = 0
let n = 1


function add(){
    number++;
    document.getElementById("p" + n).classList.add("ukryj")
    document.getElementById("p" + (n+1)).classList.remove("ukryj")
    n++
    i--
}

function sub() {
    number--;
    document.getElementById("p" + n).classList.add("ukryj")
    document.getElementById("p" + (n + 1)).classList.remove("ukryj")
    n++
    i--
}

function wynik() {
    document.getElementById("k" + number).classList.add("wynik")
    document.getElementById("p" + n).classList.add("ukryj")
    document.getElementById("p" + (n+1)).classList.remove("ukryj")
}
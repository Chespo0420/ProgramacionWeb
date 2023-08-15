let titulos = document.getElementsByName("titulo");
let pes = document.getElementsByTagName("P");
let input = document.getElementById("123");
let boton = document.getElementById("321");

boton.onclick = function () {

    titulos.forEach(e => {
        e.style.color = "red";
    });

};
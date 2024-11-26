//constante agarrar el boton
const cambiarColorBtn = document.getElementsByClassName("cambiarBtn") [0];
const cambiarTexto = document.getElementsByClassName ("texto") [0];

cambiarColorBtn.addEventListener ("click", function (){
    //cambiar color de boton
    const color = ["red", "black", "blue", "yellow", "green"]
    const colorAleatorio = color[Math.floor(Math.random() * color.length)];
    cambiarTexto.style.color = colorAleatorio;

});

let edad1= 25;
let edad2= 40;
let sumaEdades= edad1 + edad2;

alert("la suma de edades es" + " " + sumaEdades);






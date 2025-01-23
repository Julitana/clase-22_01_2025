console.log("Funcionando")

// Zona de declaracion de Variables Globales
let color1 = "black"
let color2 = "white"


//Zona para llamar funciones 
ModoOscuro(color1,color2) //funcion se ejecuta al levantar la pagina


//Zona de funciones 

function Saludar() {
    alert("Este es un saludo desde Js")
}

function Hola () {
    alert("Este es un hola")
}

function SaludarConNombre(nombre) {
    alert(nombre)
}

function LlamarMascota(valor1) {
    alert(valor1)
}

function Llamaraemergencias(telefono) {
    alert(telefono)
}

function CreaContacto(nombrecontacto) {
    alert(nombrecontacto)
}

function CambiarFondo(color) {
    alert(color)
    document.body.style.backgroundColor = color
    
}

function ModoOscuro(valor1,valor2) {
    document.body.style.backgroundColor = valor1;
    document.body.style.color =valor2;
}

function ModoClaro(valor1,valor2) {
    document.body.style.backgroundColor = valor1;
    document.body.style.color =valor2;
}

function SumardosNumeros(numero1,numero2) {
    let resultado = numero1 + numero2
    alert(resultado)

}

function MultiplicarNumeros(numero1,numero2) {
    let resultado = numero1 * numero2
    alert(resultado)

}
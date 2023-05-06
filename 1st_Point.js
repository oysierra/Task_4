// Pila-Stack
// Lista ordenada o estructura de datos que permite almacenar y recuperar datos

//1.[] Constructor
//2.[] Insertar
//3.[] Extraer
//4.[] Longitud
//5.[] Ver proximo
//6.[] Ver Elementos o toda la pila

function PilaStack() {
    // 1. Constructor
    // se crea el constructor con los atributos basicos que necesita la clase
    //constructor(){
    this.elementos = [];
    //}
    // 2. Insertar
    //insertar(elemento){
    this.insertar = function (elemento) {
        // se agrega el elemento al arreglo
        this.elementos.push(elemento);
    }

    // 6. Ver Elementos o toda la pila
    this.ver_elementos = function () {
        // se mira toda la pila como esta
        return this.elementos;
    }
}

const pila = new PilaStack();
var longitud = prompt("Cuantos elementos desea ingresar")

for (let i = 0; i < longitud; i++) {

    var n = prompt("Ingrese un elemento");
    pila.insertar({ url: n });
}

console.log(pila.ver_elementos());
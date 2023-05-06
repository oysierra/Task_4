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
    // 3. Extraer
    //extraer(){
    this.extraer = function () {
        // se toma el ultimo elemento con el tamaño - 1 recordar que los arreglos empiezan en 0 no en 1
        const ultimo = this.elementos[this.elementos.length - 1];
        // se elimina del arreglo el ultimo elemento ingresado
        this.elementos.pop();
        // devuelve el ultimo elemento
        return ultimo;
    };
    // 4. Longitud
    //longitud(){
    this.longitud = function () {
        // tamaño de la pila
        return this.elementos.length;
    }
    // 5. Ver proximo
    this.ver_proximo = function () {
        // se mira el siguiente elemento a salir de la pila pero sin eliminarlo del arreglo
        return this.elementos[this.elementos.length - 1];
    }
    // 6. Ver Elementos o toda la pila
    this.ver_elementos = function () {
        // se mira toda la pila como esta
        return this.elementos;
    }


    this.obtener_impares = function () {
        // Creamos un arreglo vacío para almacenar los números pares
        let pares = [];

        // Recorremos la pila de elementos de la fila
        for (let i = 0; i < this.elementos.length; i++) {
            // Si el elemento actual es par, lo agregamos al arreglo de pares
            if (typeof this.elementos[i] === 'number' && this.elementos[i] % 2 !== 0 && !isNaN(this.elementos[i])) {
                pares.push(this.elementos[i]);
            }
        }

        // Devolvemos el arreglo con los números pares en el orden de salida de la fila
        return pares;
    };
}

const pila = new PilaStack();

var longitud = prompt("Cuantos elementos desea ingresar")

for (let i = 0; i < longitud; i++) {

    var n = parseInt(prompt("Ingrese un elemento"));
    pila.insertar(n);
}
console.log(pila.ver_elementos());
pila.obtener_impares();
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


    this.contar_tipos_datos = function () {
        let strings = 0;
        let numeros = 0;
        let arreglos = 0;

        // Recorremos la pila y contamos los tipos de datos
        for (let i = 0; i < this.elementos.length; i++) {
            const tipoDato = typeof this.elementos[i];

            if (tipoDato === 'string') {
                strings++;
            } else if (tipoDato === 'number') {
                numeros++;
            } else if (Array.isArray(this.elementos[i])) {
                arreglos++;
            }
        }

        // Devolvemos un objeto con el total de cada tipo de dato
        return { strings, numeros, arreglos };
    }
}


const pila = new PilaStack();


console.log(pila.ver_elementos());


pila.insertar(1);
pila.insertar('dos');
pila.insertar(3);
pila.insertar('cuatro');
pila.insertar(['manzana', 'naranja', 'piña']);

console.log(pila.contar_tipos_datos());
// Cola-Queue
// Lista ordenada o estructura de datos que permite almacenar y recuperar datos en orden FIFO (First In, First Out)

function ColaQueue() {
    // se crea el constructor con los atributos básicos que necesita la clase
    this.elementos = [];

    // método para insertar un elemento al final de la cola
    this.insertar = function (elemento) {
        this.elementos.push(elemento);
    }

    // método para extraer el primer elemento de la cola
    this.extraer = function () {
        return this.elementos.shift();
    }

    // método para obtener la longitud de la cola
    this.longitud = function () {
        return this.elementos.length;
    }

    // método para ver el próximo elemento de la cola
    this.ver_proximo = function () {
        return this.elementos[0];
    }

    // método para ver todos los elementos de la cola
    this.ver_elementos = function () {
        return this.elementos;
    }

    // método para ver todos los elementos de la cola
    this.agregar_N_elementos = function (longitud) {
        for (let i = 0; i < longitud; i++) {
            const elemento = prompt(`Ingrese el elemento ${i + 1}:`);
            this.elementos.push(elemento);
        }
    }
}

const cola = new ColaQueue();
cola.agregar_N_elementos(5);
console.log(cola.ver_elementos());

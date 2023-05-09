function ColaQueue() {
    // 1. Constructor
    this.elementos = [];

    // 2. Insertar
    this.insertar = function (elemento) {
        // se agrega el elemento al final del arreglo
        this.elementos.push(elemento);
    };

    // 3. Extraer
    this.extraer = function () {
        // se toma el primer elemento del arreglo
        const primero = this.elementos[0];
        // se elimina el primer elemento del arreglo
        this.elementos.shift();
        // devuelve el primer elemento
        return primero;
    };

    // 4. Longitud
    this.longitud = function () {
        // tamaño de la cola
        return this.elementos.length;
    };

    // 5. Ver proximo
    this.ver_proximo = function () {
        // se mira el siguiente elemento a salir de la cola pero sin eliminarlo del arreglo
        return this.elementos[0];
    };

    // 6. Ver Elementos o toda la cola
    this.ver_elementos = function () {
        // se mira toda la cola como está
        return this.elementos;
    };

    this.obtener_pares = function () {
        // Creamos un arreglo vacío para almacenar los números pares
        let pares = [];

        // Recorremos la cola de elementos
        for (let i = 0; i < this.elementos.length; i++) {
            // Si el elemento actual es par, lo agregamos al arreglo de pares
            if (typeof this.elementos[i] === "number" && this.elementos[i] % 2 === 0) {
                pares.push(this.elementos[i]);
            }
        }

        // Devolvemos el arreglo con los números pares en el orden de salida de la cola
        return pares;
    };
}

const cola = new ColaQueue();

var longitud = prompt("Cuantos elementos desea ingresar");

for (let i = 0; i < longitud; i++) {
    var n = parseInt(prompt("Ingrese un elemento"));
    cola.insertar(n);
}

console.log(cola.ver_elementos());
cola.obtener_pares();

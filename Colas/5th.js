function ColaQueue() {
    // 1. Constructor
    // se crea el constructor con los atributos básicos que necesita la clase
    this.elementos = [];

    // 2. Insertar
    this.insertar = function (elemento) {
        // se agrega el elemento a la cola
        this.elementos.unshift(elemento);
    };

    // 3. Extraer
    this.extraer = function () {
        // se toma el primer elemento de la cola
        const primero = this.elementos[0];
        // se elimina del arreglo el primer elemento ingresado
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

    this.agregar_N_elementos = function (longitud) {
        for (let i = 0; i < longitud; i++) {
            const elemento = parseInt(prompt(`Ingrese el elemento ${i + 1}:`));
            this.elementos.push(elemento);
        }
    }


    this.obtener_impares = function () {
        // Creamos un arreglo vacío para almacenar los números impares
        let impares = [];

        // Recorremos la cola de elementos
        for (let i = 0; i < this.elementos.length; i++) {
            // Si el elemento actual es impar, lo agregamos al arreglo de impares
            if (typeof this.elementos[i] === 'number' && this.elementos[i] % 2 !== 0 && !isNaN(this.elementos[i])) {
                impares.push(this.elementos[i]);
            }
        }

        // Devolvemos el arreglo con los números impares en el orden de salida de la cola
        return impares;
    };
}

const cola = new ColaQueue();

cola.agregar_N_elementos(5);
console.log(cola.ver_elementos());
console.log(cola.obtener_impares());

function ColaQueue() {
    // 1. Constructor
    // se crea el constructor con los atributos básicos que necesita la clase
    this.elementos = [];
    
    // 2. Insertar
    this.insertar = function (elemento) {
        // se agrega el elemento al arreglo
        this.elementos.push(elemento);
    }
    
    // 3. Extraer
    this.extraer = function () {
        // se toma el primer elemento de la cola
        const primero = this.elementos[0];
        // se elimina del arreglo el primer elemento
        this.elementos.shift();
        // devuelve el primer elemento
        return primero;
    };
    
    // 4. Longitud
    this.longitud = function () {
        // tamaño de la cola
        return this.elementos.length;
    }
    
    // 5. Ver proximo
    this.ver_proximo = function () {
        // se mira el siguiente elemento a salir de la cola pero sin eliminarlo del arreglo
        return this.elementos[0];
    }
    
    // 6. Ver Elementos o toda la cola
    this.ver_elementos = function () {
        // se mira toda la cola como esta
        return this.elementos;
    }


    this.agregar_N_elementos = function (longitud) {
        for (let i = 0; i < longitud; i++) {
            const elemento = prompt(`Ingrese el elemento ${i + 1}:`);
            this.elementos.push(elemento);
        }
    }

    // Función para determinar si los elementos de la cola son pares o impares
    this.es_par_impar = function () {
        let esPar = true;
        for (let i = 0; i < this.elementos.length; i++) {
            if (this.elementos[i] % 2 === 0 && esPar) {
                esPar = true;
            } else if (this.elementos[i] % 2 !== 0 && !esPar) {
                esPar = false;
            } else {
                return false;
            }
        }
        return true;
    }
}

const cola = new ColaQueue();

cola.agregar_N_elementos(5);
cola.es_par_impar();
console.log(cola.ver_elementos());
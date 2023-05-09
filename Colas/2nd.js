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

var longitud = prompt("Cuantos elementos desea ingresar")

for (let i = 0; i < longitud; i++) {
    var n = parseInt(prompt("Ingrese un elemento"));
    cola.insertar({ url: n });
}

console.log(cola.ver_elementos());
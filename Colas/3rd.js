function ColaQueue() {
    this.elementos = [];

    this.insertar = function (elemento) {
        // se agrega el elemento al final del arreglo
        this.elementos.push(elemento);
    }

    this.extraer = function () {
        // se toma el primer elemento
        const primero = this.elementos[0];
        // se elimina del arreglo el primer elemento
        this.elementos.shift();
        // devuelve el primer elemento
        return primero;
    };

    this.longitud = function () {
        // tamaño de la cola
        return this.elementos.length;
    }

    this.ver_proximo = function () {
        // se mira el siguiente elemento a salir de la cola pero sin eliminarlo del arreglo
        return this.elementos[0];
    }

    this.ver_elementos = function () {
        // se mira toda la cola como esta
        return this.elementos;
    }

    this.sumar_numeros = function () {
        let suma = 0;
        for (let i = 0; i < this.elementos.length; i++) {
            const numero = this.elementos[i];
            if (!isNaN(numero)) {
                suma += numero;
            }
        }
        return suma;
    };
}

const cola = new ColaQueue();

var longitud = prompt("Cuantos elementos desea ingresar");

for (let i = 0; i < longitud; i++) {
    var n = parseInt(prompt("Ingrese un elemento"));
    cola.insertar(n);
}

console.log(cola.ver_elementos());
cola.sumar_numeros();

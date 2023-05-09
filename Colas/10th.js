function ColaQueue() {
    // 1. Constructor
    this.elementos = [];

    // 2. Insertar
    this.insertar = function (elemento) {
        this.elementos.push(elemento);
    }

    // 3. Extraer
    this.extraer = function () {
        return this.elementos.shift();
    };

    // 4. Longitud
    this.longitud = function () {
        return this.elementos.length;
    }

    // 5. Ver proximo
    this.ver_proximo = function () {
        return this.elementos[0];
    }

    // 6. Ver Elementos o toda la cola
    this.ver_elementos = function () {
        return this.elementos;
    }

    // 7. Eliminar elementos hasta una posición dada
    this.eliminar_hasta_posicion = function(posicion) {
        if (posicion < 0 || posicion >= this.elementos.length) {
            console.log("La posición dada no existe en la cola.");
            return;
        }

        // Eliminar los elementos hasta la posición dada
        this.elementos.splice(0, posicion+1);

        // Reindexar los elementos restantes
        for (let i = 0; i < this.elementos.length; i++) {
            this.elementos[i] = this.elementos[i + posicion];
        }
        this.elementos.length = this.elementos.length - posicion;
    }
}

const cola = new ColaQueue();

cola.insertar(1);
cola.insertar('dos');
cola.insertar(3);
cola.insertar('cuatro');
cola.insertar('cinto');
cola.insertar(7);
cola.insertar('warcraft');
console.log(cola.ver_elementos());
cola.eliminar_hasta_posicion(3);

console.log(cola.ver_elementos());

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

    // 7. Eliminar elemento
    this.eliminar_elemento = function (nombre_elemento) {
        let indice_elemento = -1;

        for (let i = 0; i < this.elementos.length; i++) {
            const elemento_actual = this.elementos[i];

            if (this.elementos[i] === nombre_elemento) {
                indice_elemento = i;
                break;
            }
        }

        if (indice_elemento >= 0) {
            this.elementos.splice(indice_elemento, 1);

            // Reindexar los elementos
            for (let i = indice_elemento; i < this.elementos.length; i++) {
                this.elementos[i].indice = i + 1;
            }

            return true;
        } else {
            console.log(`El elemento "${nombre_elemento}" no existe en la cola.`);
            return false;
        }
    }
}

const cola = new ColaQueue();

console.log(cola.ver_elementos());

cola.insertar(1);
cola.insertar('dos');
cola.insertar(3);
cola.insertar('cuatro');
cola.eliminar_elemento(3);

console.log(cola.ver_elementos());

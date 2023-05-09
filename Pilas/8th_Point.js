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
    this.elementos = [];

    // 2. Insertar
    this.insertar = function (elemento) {
        this.elementos.push(elemento);
    }

    // 3. Extraer
    this.extraer = function () {
        const ultimo = this.elementos[this.elementos.length - 1];
        this.elementos.pop();
        return ultimo;
    };

    // 4. Longitud
    this.longitud = function () {
        return this.elementos.length;
    }

    // 5. Ver proximo
    this.ver_proximo = function () {
        return this.elementos[this.elementos.length - 1];
    }

    // 6. Ver Elementos o toda la pila
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
            console.log(`El elemento "${nombre_elemento}" no existe en la pila.`);
            return false;
        }
    }
}

const pila = new PilaStack();


console.log(pila.ver_elementos());


pila.insertar(1);
pila.insertar('dos');
pila.insertar(3);
pila.insertar('cuatro');
pila.eliminar_elemento(3);

console.log(pila.ver_elementos());
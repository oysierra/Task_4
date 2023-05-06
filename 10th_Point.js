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

    this.eliminar_hasta_posicion = function(posicion) {
        if (posicion < 0 || posicion >= this.elementos.length) {
            console.log("La posición dada no existe en la fila.");
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

const pila = new PilaStack();

pila.insertar(1);
pila.insertar('dos');
pila.insertar(3);
pila.insertar('cuatro');
pila.insertar('cinto');
pila.insertar(7);
pila.insertar('warcraft');
console.log(pila.ver_elementos());
pila.eliminar_hasta_posicion(3);

console.log(pila.ver_elementos());
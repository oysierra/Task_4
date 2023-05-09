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

    this.eliminar_por_posicion = function (posicion) {
        if (posicion < 1 || posicion > this.elementos.length) {
            console.log("Posición inválida. No se puede eliminar elemento.");
            return;
        }

        this.elementos.splice(posicion - 1, 1);
    }
}

const pila = new PilaStack();


console.log(pila.ver_elementos());


pila.insertar(1);
pila.insertar('dos');
pila.insertar(3);
pila.insertar('cuatro');
pila.eliminar_por_posicion(5)

console.log(pila.ver_elementos());
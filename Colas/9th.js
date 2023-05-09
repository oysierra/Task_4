function ColaQueue() {
    // 1. Constructor
    this.elementos = [];

    // 2. Insertar
    this.insertar = function (elemento) {
        this.elementos.push(elemento);
    };

    // 3. Extraer
    this.extraer = function () {
        return this.elementos.shift();
    };

    // 4. Longitud
    this.longitud = function () {
        return this.elementos.length;
    };

    // 5. Ver proximo
    this.ver_proximo = function () {
        return this.elementos[0];
    };

    // 6. Ver Elementos o toda la cola
    this.ver_elementos = function () {
        return this.elementos;
    };

    // 7. Eliminar elemento
    this.eliminar_por_posicion = function (posicion) {
        if (posicion < 1 || posicion > this.elementos.length) {
            console.log("Posición inválida. No se puede eliminar elemento.");
            return;
        }

        this.elementos.splice(posicion - 1, 1);
    };
}

const cola = new ColaQueue();

console.log(cola.ver_elementos());

cola.insertar(1);
cola.insertar('dos');
cola.insertar(3);
cola.insertar('cuatro');
cola.eliminar_por_posicion(5);

console.log(cola.ver_elementos());

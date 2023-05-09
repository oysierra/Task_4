function ColaQueue() {
    // 1. Constructor
    // se crea el constructor con los atributos básicos que necesita la clase
    this.elementos = [];

    // 2. Insertar
    this.insertar = function (elemento) {
        // se agrega el elemento a la cola
        this.elementos.push(elemento);
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

    this.contar_tipos_datos = function () {
        let strings = 0;
        let numeros = 0;
        let arreglos = 0;

        // Recorremos la cola y contamos los tipos de datos
        for (let i = 0; i < this.elementos.length; i++) {
            const tipoDato = typeof this.elementos[i];

            if (tipoDato === 'string') {
                strings++;
            } else if (tipoDato === 'number') {
                numeros++;
            } else if (Array.isArray(this.elementos[i])) {
                arreglos++;
            }
        }

        // Devolvemos un objeto con el total de cada tipo de dato
        return { strings, numeros, arreglos };
    };
}

const cola = new ColaQueue();

console.log(cola.ver_elementos());

cola.insertar(1);
cola.insertar('dos');
cola.insertar(3);
cola.insertar('cuatro');
cola.insertar(['warcraft', 'harry', 'color']);

console.log(cola.contar_tipos_datos());

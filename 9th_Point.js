function removeElementByIndex(arr, index) {
    if (index >= 0 && index < arr.length) {
        arr.splice(index, 1);
        return "Elemento en la posición " + index + " eliminado correctamente";
    } else {
        return "La posición " + index + " no existe en la fila";
    }
}

console.log(removeElementByIndex(["world", "warcraft", "ACDC"], 2));
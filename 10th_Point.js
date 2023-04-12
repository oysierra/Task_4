function removeElementsUntilIndex(arr, index) {
    if (index >= 0 && index < arr.length) {
        arr.splice(0, index + 1);
        return "Elementos hasta la posición " + index + " eliminados correctamente";
    } else {
        return "La posición " + index + " no existe en la fila";
    }
}

console.log(removeElementsUntilIndex(["apple", "samsung", "msi", "asus", "xiaomi"], 2));
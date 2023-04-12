function removeElement(arr, name) {
    let index = arr.indexOf(name);
    if (index !== -1) {
        arr.splice(index, 1);
        return "Elemento " + name + " eliminado correctamente";
    } else {
        return "El elemento " + name + " no existe en la fila";
    }
}
console.log(removeElement(["manzana", "pera", "banana"], "pera"));
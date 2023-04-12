function Get_StringElements(arr) {
    let stringElements = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
            stringElements.push(arr[i]);
        }
    }
    return stringElements;
}

console.log(Get_StringElements([3, "pepe", true, "mundo", 7, "10", 77]));
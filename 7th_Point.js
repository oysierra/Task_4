function countDataTypes(arr) {
    let stringCount = 0;
    let numberCount = 0;
    let arrayCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
            stringCount++;
        } else if (typeof arr[i] === "number") {
            numberCount++;
        } else if (Array.isArray(arr[i])) {
            arrayCount++;
        }
    }

    return {
        strings: stringCount, numbers: numberCount, arrays: arrayCount
    }
}

console.log(countDataTypes([3, "hola", true, [1, 2], "mundo", 7, "10", [3, "cuatro"]]));
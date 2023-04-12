function getEvenNumbers(arr) {
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

console.log(getEvenNumbers([3, 5, 8, "hola", 7, 10]));
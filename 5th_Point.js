function getOddNumbers(arr) {
    let oddNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && arr[i] % 2 !== 0) {
            oddNumbers.push(arr[i]);
        }
    }
    return oddNumbers;
}

console.log(getOddNumbers([3, 5, "8", "pepe", 7, 10]));
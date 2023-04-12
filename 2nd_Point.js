function Is_Odd_Even_Array(array) {
    let isEven = array[0] % 2 === 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] % 2 === 0 && isEven) {
            return false;
        } else if (array[i] % 2 !== 0 && !isEven) {
            return false;
        }
        isEven = !isEven;
    }
    return true;
}

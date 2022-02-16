"use-strict";

let array = [1, 2, 5, 2, 1];

const esPalindromo = () => {
    let array2 = array.slice().reverse();
    console.log(array,array2)
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array2[i]) {
        } else {
            return false
        }
    }
    return true
}

console.log(esPalindromo(array))

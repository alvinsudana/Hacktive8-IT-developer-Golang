function deret(arr) {
    if (arr.length < 2) {
        return true;
    }
    const diff = arr[1] - arr[0];
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== diff) {
            return false;
        }
    }
    return true;
}

const angka1 = [2, 4, 6, 8];
const angka2 = [2, 4, 6, 9];
const angka3 = [5, 10, 15, 20];
const angka4 = [1, 2, 3, 4, 5];
const angka5 = [0, 1, 1, 2, 3, 5, 8, 13];

console.log(deret(angka1)); // Output: true
console.log(deret(angka2)); // Output: false
console.log(deret(angka3)); // Output: true
console.log(deret(angka4)); // Output: true
console.log(deret(angka5)); // Output: false
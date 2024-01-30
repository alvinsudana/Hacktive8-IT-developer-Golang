function perkalianAngka(arr) {
    if (arr.length < 3) {
        return "Angka harus lebih dari 3";
    }
    const uniqueArr = Array.from(new Set(arr));
    const sortedArr = uniqueArr.sort((a, b) => b - a);
    const threeLargest = sortedArr.slice(0, 3);
    const result = threeLargest.reduce((acc, num) => acc * num, 1);
    return result;
}
let angka = [5, 6, 4, 5, 6, 11, 2, 10, 1, 1, 10,];

try {
    const result = perkalianAngka(angka);
    console.log(result);
} catch (error) {
    console.error(error.message);
}
function hitungFPB(angka1, angka2) {
    // Algoritma Euclidean untuk mencari FPB
    while (angka2 !== 0) {
        let temp = angka2;
        angka2 = angka1 % angka2;
        angka1 = temp;
    }

    // Angka1 merupakan FPB
    return angka1;
}

// Contoh pemanggilan fungsi
console.log(hitungFPB(12, 16));
console.log(hitungFPB(50, 40));
console.log(hitungFPB(22, 99));
console.log(hitungFPB(24, 36));
console.log(hitungFPB(17, 23));
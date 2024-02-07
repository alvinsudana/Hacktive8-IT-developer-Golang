let objekDiri = {
    nama_depan: "Alvin",
    nama_belakang: "Sudana",
    hobi: ["futsal"],
    angka_favorit: 11,
    memakai_kacamata: true,
  };

  console.log(objekDiri.nama_depan);
  console.log(objekDiri.nama_belakang);
  console.log(objekDiri.hobi);
  console.log(objekDiri.angka_favorit);
  console.log(objekDiri.memakai_kacamata);

  console.log(objekDiri.nama_depan, objekDiri.nama_belakang)

objekDiri.angka_favorit = 8
console.log(objekDiri.angka_favorit)

objekDiri.hobi.push("Coding")
console.log(objekDiri.hobi)

objekDiri.lulusan = "Hacktiv8"
console.log(objekDiri.lulusan)

for (let j = 0; j < objekDiri.hobi.length; j++){
    console.log(objekDiri.hobi[j])
}

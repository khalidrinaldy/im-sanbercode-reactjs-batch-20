//Soal 1
console.log("//Soal 1");
function halo() {
    return "Halo Sanbers!";
}
console.log(halo());

//Soal 2
console.log("\n//Soal 2");
function kalikan(x,y) {
    return x*y;
}
var num1 = 12;
var num2 = 4;
var hasilKali = kalikan(num1,num2);
console.log(hasilKali);

//Soal 3
console.log("\n//Soal 3");
function introduce(name, age, address, hobby) {
    return "Nama saya " + name + ", umur saya " + age + " tahun, " +
    "alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby 
    + "!";
}
var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";
var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);

//Soal 4
console.log("\n//Soal 4");
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992];
var peserta = {
    nama: "Asep",
    jenis_kelamin: "laki-laki",
    hobi: "baca buku",
    tahun: 1992
}
console.log(peserta.nama);
console.log(peserta.jenis_kelamin);
console.log(peserta.hobi);
console.log(peserta.tahun);

//Soal 5
console.log("\n//Soal 5");
var buah = [
    {
        nama: "strawberry",
        warna: "merah",
        ada_bijinya: "tidak",
        harga: 9000
    },
    {
        nama: "jeruk",
        warna: "oranye",
        ada_bijinya: "ada",
        harga: 8000
    },
    {
        nama: "semangka",
        warna: "Hijau & Merah",
        ada_bijinya: "ada",
        harga: 10000
    },
    {
        nama: "pisang",
        warna: "kuning",
        ada_bijinya: "tidak",
        harga: 5000
    }
];
buah.forEach((item) => {
    console.log(item.nama);
});

//Soal 6
console.log("\n//Soal 6");
var dataFilm = [];
function tambahFilm(nama, durasi , genre, tahun) {
    dataFilm.push({
        nama: nama,
        durasi: durasi,
        genre: genre,
        tahun: tahun
    });
}
tambahFilm("Sanbercode", "1 bulan", "Coding", 2020);
console.log(dataFilm);
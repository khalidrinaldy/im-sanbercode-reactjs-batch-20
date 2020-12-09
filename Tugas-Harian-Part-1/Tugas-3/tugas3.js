// Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
console.log("//Soal 1 \n" + kataPertama + " " + kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1) + " " + 
            kataKetiga + " " + kataKeempat.toUpperCase() + "\n");

// Soal 2
kataPertama = parseInt("1");
kataKedua = parseInt("2");
kataKetiga = parseInt("4");
kataKeempat = parseInt("5");
var jumlah = kataPertama + kataKedua + kataKetiga + kataKeempat;
console.log("//Soal 2 \n" + jumlah + "\n");

//Soal 3
var kalimat = 'wah javascript itu keren sekali'; 

kataPertama = kalimat.substring(0, 3); 
kataKedua = kalimat.substring(3,15); // do your own! 
kataKetiga = kalimat.substring(15,19); // do your own! 
kataKeempat = kalimat.substring(19,25); // do your own! 
var kataKelima = kalimat.substring(24,31); // do your own! 
console.log("//Soal 3");
console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima + "\n");

//Soal 4
var nilai = 78;
console.log("//Soal 4");
if (nilai >= 80) {
    console.log("Indeks = A\n");
} else if (nilai >= 70 && nilai < 80) {
    console.log("Indeks = B\n");
} else if (nilai >= 60 && nilai < 70) {
    console.log("Indeks = C\n");
} else if (nilai >= 50 && nilai < 60) {
    console.log("Indeks = D\n");
} else if (nilai < 50 ) {
    console.log("Indeks = E\n");
}

//Soal 5
var tanggal = 27;
var bulan = 3;
var tahun = 2000;
switch(bulan) {
    case 1 :
        bulan = "Januari";
        break;
    case 2 :
        bulan = "Februari";
        break;
    case 3 :
        bulan = "Maret";
        break;
    case 4 :
        bulan = "April";
        break;
    case 5 :
        bulan = "Mei";
        break;
    case 6 :
        bulan = "Juni";
        break;
    case 7 :
        bulan = "Juli";
        break;
    case 8 :
        bulan = "Agustus";
        break;
    case 9 :
        bulan = "September";
        break;
    case 10 :
        bulan = "Oktober";
        break;
    case 11 :
        bulan = "November";
        break;
    case 12 :
        bulan = "Desember";
        break;
    default :
        bulan = "n/a";
        break;
}
console.log("//Soal 5 \n" + tanggal + " " + bulan + " " + tahun);
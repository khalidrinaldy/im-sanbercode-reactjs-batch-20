//Soal 1
console.log("//Soal 1");
var soal1 = 2;
console.log("LOOPING PERTAMA");
while (soal1 <= 20) {
    if (soal1%2 == 0) {
        console.log(soal1 + " " + "- " + "I love coding");
    }
    soal1++;
}
console.log("LOOPING KEDUA");
while (soal1 >= 2) {
    if (soal1%2 == 0) {
        console.log(soal1 + " " + "- " + "I will become a frontend developer");
    }
    soal1--;
}

//Soal 2
console.log("\n//Soal 2");
for (var soal2 = 1; soal2 <= 20; soal2++) {
    if (soal2%3 == 0 && soal2%2 != 0) {
        console.log(soal2 + " " + "- " + "I Love Coding");
    } else if (soal2%2 != 0) {
        console.log(soal2 + " " + "- " + "Santai");
    } else if (soal2%2 == 0) {
        console.log(soal2 + " " + "- " + "Berkualitas");
    }
}

//Soal 3
console.log("\n//Soal 3");
for (var x=0; x < 7; x++) {
    for (var y=0; y<=x;y++) {
        process.stdout.write("#");
    }
    console.log("");
}

//Soal 4
console.log("\n//Soal 4");
var kalimat = "saya sangat senang belajar javascript";
var array = kalimat.split(" ");
console.log(array);

//Soal 5
console.log("\n//Soal 5");
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
for (var x=0; x<daftarBuah.length; x++) {
    console.log(daftarBuah[x]);
}
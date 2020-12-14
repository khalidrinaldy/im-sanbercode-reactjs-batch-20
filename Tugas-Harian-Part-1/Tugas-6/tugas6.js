//Soal 1
console.log("//Soal 1");
const luasLingkaran = (r) => {
    return 3.14*r*r;
}
const kelilingLingkaran = (r) => {
    return 3.14*2*r;
}
console.log("Luas lingkaran dengan jari-jari 10 adalah " + luasLingkaran(10));
console.log("Keliling lingkaran dengan jari-jari 10 adalah " + kelilingLingkaran(10))

//Soal 2
console.log("\n//Soal 2");
let kalimat = "";
const tambahKalimat = (kata) => {
    kalimat = `${kalimat} ${kata}`;
}
tambahKalimat("saya");
tambahKalimat("adalah");
tambahKalimat("seorang");
tambahKalimat("frontend");
tambahKalimat("developer");
console.log(kalimat);

//Soal 3
console.log("\n//Soal 3");
const newFunction = (firstName,lastName) => {
    return {
        firstName,
        lastName,
        fullName: () => {
            console.log(firstName + " " + lastName);
        }
    }
}
newFunction("William", "Imoh").fullName();

//Soal 4
console.log("\n//Soal 4");
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}
const {firstName, lastName, destination, occupation} = newObject;
console.log(firstName, lastName, destination, occupation);

//Soal 5
console.log("\n//Soal 5");
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];
console.log(combined);
//Soal 1
console.log("//Soal 1");
class Animal {
    constructor(name) {
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }

    get animalName() {
        return this.name;
    }

    get animalLegs() {
        return this.legs;
    }

    get animalBlood() {
        return this.cold_blooded;
    }
}
var sheep = new Animal("shaun");
console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

class Ape extends Animal{
    constructor(name) {
        super(name);
        this.legs = 2;
    }

    yell() {
        console.log("Auooo");
    }
}

class Frog extends Animal {
    constructor(name) {
        super(name);
    }

    jump() {
        console.log("hop hop");
    }
}

var sungokong = new Ape("kera sakti");
console.log(sungokong.animalName);
console.log(sungokong.animalLegs);
console.log(sungokong.animalBlood);
sungokong.yell();
 
var kodok = new Frog("buduk");
console.log(kodok.animalName);
console.log(kodok.animalLegs);
console.log(kodok.animalBlood);
kodok.jump();

//Soal 2
console.log("\n//Soal 2");
class Clock {
    timer;
    constructor({template}) {
        this.template = template;
        /*this.date = new Date();
        this.hours = this.date.getHours();
        if (this.hours < 10) this.hours = '0' + this.hours;
        this.mins = this.date.getMinutes();
        if (this.mins < 10) this.mins = '0' + this.mins;
        this.secs = this.date.getSeconds();
        if (this.secs < 10) this.secs = '0' + this.secs;
        this.output = template
        .replace('h', this.hours)
        .replace('m', this.mins)
        .replace('s', this.secs);
        console.log(this.output);*/
    }

    render() {
        var date = new Date();
        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        var output = this.template
          .replace('h', hours)
          .replace('m', mins)
          .replace('s', secs);
        console.log(output);
    }

    stop() {
        clearInterval(timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => {this.render()}, 1000);
    }
}
var clock = new Clock({template: 'h:m:s'});
clock.start(); 
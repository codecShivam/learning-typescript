"use strict";
// class Coder {
//   name: string;
//   music: string;
//   age: number;
//   lang: string;
//   constructor(name: string, music: string, age: number, lang: string) {
//     this.name = name;
//     this.music = music;
//     this.age = age;
//     this.lang = lang;
//   }
// }
//or
class Coder {
    constructor(name, //readonly property can't be changed after initialization
    music, age, //private property can't be accessed outside the class
    lang = "Typescript" //protected property can't be accessed outside the class but can be accessed in child class
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `${this.name} is ${this.age} years old`;
    }
}
const Shivam = new Coder("Shivam", "Rock", 21);
console.log(Shivam.getAge());
console.log(Shivam.name);
console.log(Shivam.music);
// console.log(Shivam.age); //error
// console.log(Shivam.lang); //error
class webDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang} code`;
    }
}
const meena = new webDev("Mac", "Meena", "Rock", 19);
console.log(meena.getLang()); //output: I write Typescript code
console.log(meena.getAge()); // output: Meena is 19 years old
console.log(meena.name); //output: Meena
console.log(meena.music); //output: Rock
// console.log(meena.age); //error
// console.log(meena.lang); //error
console.log(meena.computer); //output: Mac
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} is ${action} the ${this.instrument}`;
    }
}
const john = new Guitarist("John");
console.log(john.play("playing")); //output: John is playing the undefined
console.log(john.name); //output: John
console.log(john.instrument); //output: undefined
console.log(john.play("playing")); //output: John is playing the undefined
const shivam = new Guitarist("Shivam", "Guitar");
console.log(shivam.play("playing")); //output: Shivam is playing the Guitar
///////////////////////////////////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const p1 = new Peeps("Shivam");
const p2 = new Peeps("Meena");
const p3 = new Peeps("John");
console.log(Peeps.getCount()); //output: 3
console.log(p1.id); //output: 1
console.log(p2.id); //output: 2
console.log(p3.id); //output: 3
///////////////////////////////////////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const Mybands = new Bands();
Mybands.data = ["Metallica", "Slayer", "Megadeth"];
console.log(Mybands.data); //output: ["Metallica", "Slayer", "Megadeth"]
Mybands.data = [...Mybands.data, "Iron Maiden"];
console.log(Mybands.data); //output: ["Metallica", "Slayer", "Megadeth", "Iron Maiden"]
// Mybands.data = "van halen"; //error output: Param is not an array of strings
// Mybands.data = ["van halen",23] //error output: Param is not an array of strings

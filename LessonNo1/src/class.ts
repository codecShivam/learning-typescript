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
    constructor(
        public readonly name: string, //readonly property can't be changed after initialization
        public music: string,
        private age: number,//private property can't be accessed outside the class
        protected lang: string = "Typescript"//protected property can't be accessed outside the class but can be accessed in child class
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    public getAge() {
        return `${this.name} is ${this.age} years old`;
    }
}

const Shivam = new Coder("Shivam", "Rock", 21);
console.log(Shivam.getAge());
console.log(Shivam.name);
console.log(Shivam.music);
// console.log(Shivam.age); //error
// console.log(Shivam.lang); //error

// class webDev extends Coder {
//     constructor ( 
//         public computer: string,
//         public name: string,

        
//         )
// }
// let username = "shivam";
// console.log(username);

// let a: number = 10;
// let b: string = '20';
// let c: number = 2;
// console.log(a + b);
// console.log(a / b);
// console.log(b * c);

let myName: String;
myName = "Shivam";;
myName = "Shivam Yadav";
let meaningOfLife: number ;
let isLoading: boolean;

isLoading = true;
meaningOfLife = 42;
let album: any;
let unionType: number | string; //can be number or string

album = 2453;
album = "Shivam";
album = true;   

const sum = (a: number, b: number) => {
    return a + b;
}

sum(10, 20);

let postId: string | number;
let isActive: number | boolean | string;

let re: RegExp = /\w+/g;

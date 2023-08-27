"use strict";
// let username = "shivam";
// console.log(username);
// let a: number = 10;
// let b: string = '20';
// let c: number = 2;
// console.log(a + b);
// console.log(a / b);
// console.log(b * c);
// let myName: String;
// myName = "Shivam";;
// myName = "Shivam Yadav";
// let meaningOfLife: number ;
// let isLoading: boolean;
// isLoading = true;
// meaningOfLife = 42;
// let album: any;
// let unionType: number | string; //can be number or string
// album = 2453;
// album = "Shivam";
// album = true;   
// const sum = (a: number, b: number) => {
//     return a + b;
// }
// sum(10, 20);
// let postId: string | number;
// let isActive: number | boolean | string;
// let re: RegExp = /\w+/g;
let stringArr = ['one', 'hey', 'shivam'];
let guitars = ['Fender', 'Gibson', 'Ibanez', 'Taylor', 23];
let mixedData = ['evh', 687, true];
stringArr[0] = 'two';
stringArr.push('three');
guitars[0] = 545; //no problem switching to number type as it is union type array 
guitars.push('Yamaha');
guitars.push(545);
// guitars.push(true); //error as it is not union type array 
// stringArr = guitars; //error as it is not union type array
guitars = stringArr; //no error as it is union type array
// guitars = mixedData; //error as it is not union type array
mixedData = guitars; //no error as it is union type array
let test = []; //any type array
test.push(1);
test.push('shivam');
test.push(true);
let test2 = []; //string type array
test2.push('shivam');
// tuple 
let myTuple = ['hey', 23, true]; //tuple type array
let mixed = ['hey', 23, true]; //union type array
mixed = myTuple;
// myTuple = mixed //Type '(string | number | boolean)[]' is not assignable to type '[string, number, boolean]'.
//   Target requires 3 element(s) but source may have fewer.
// myTuple[3] = 24 
myTuple[1] = 23; //only 3 elements are allowed in tuple and type of elements should be same as defined in tuple 
let myObj;
myObj = []; //no error as array is also an object
myObj = test2;
myObj = myTuple;
myObj = mixed;
myObj = {};
const exampleObj = {
    prop1: 'hey',
    prop2: true,
};
let guitar;
guitar = {
    name: 'Fender',
    active: true,
    albums: [1, 2, 3, 'ytfy']
};
let guitar2;
guitar2 = {
    name: 'Fender',
    active: true,
    albums: [1, 2, 3, 'ytfy']
};
guitar = guitar2; //no error as both are of same type and have same properties
let guitar3;
guitar3 = {
    name: 'Fender',
    albums: [1, 2, 3, 'ytfy']
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(guitar));
//enum
// unlike most typecript features, enums are not a type-level addition to javascript. Instead, they are compile-time constructs that are compiled to javascript objects. something added to the language and runtime environment.
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.C); //2 only if we will not provide value to enum then it will give index of that element 
console.log(Grade[2]); //C  
var Grade2;
(function (Grade2) {
    Grade2["U"] = "U";
    Grade2["D"] = "D";
    Grade2["C"] = "C";
    Grade2["B"] = "B";
    Grade2["A"] = "A";
})(Grade2 || (Grade2 = {}));
console.log(Grade2.C); //C
// console.log(Grade2[2]); //undefined
var Grade3;
(function (Grade3) {
    Grade3[Grade3["U"] = 2] = "U";
    Grade3[Grade3["D"] = 3] = "D";
    Grade3[Grade3["C"] = 4] = "C";
})(Grade3 || (Grade3 = {}));
console.log(Grade3.C); //4 as it will start from 2 and increment by 1 

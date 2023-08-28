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

let stringArr = ["one", "hey", "shivam"];

let guitars = ["Fender", "Gibson", "Ibanez", "Taylor", 23];

let mixedData = ["evh", 687, true];

stringArr[0] = "two";
stringArr.push("three");

guitars[0] = 545; //no problem switching to number type as it is union type array
guitars.push("Yamaha");
guitars.push(545);
// guitars.push(true); //error as it is not union type array

// stringArr = guitars; //error as it is not union type array
guitars = stringArr; //no error as it is union type array

// guitars = mixedData; //error as it is not union type array
mixedData = guitars; //no error as it is union type array

let test = []; //any type array
test.push(1);
test.push("shivam");
test.push(true);

let test2: string[] = []; //string type array
test2.push("shivam");

// tuple
let myTuple: [string, number, boolean] = ["hey", 23, true]; //tuple type array

let mixed = ["hey", 23, true]; //union type array

mixed = myTuple;

// myTuple = mixed //Type '(string | number | boolean)[]' is not assignable to type '[string, number, boolean]'.
//   Target requires 3 element(s) but source may have fewer.

// myTuple[3] = 24
myTuple[1] = 23; //only 3 elements are allowed in tuple and type of elements should be same as defined in tuple

let myObj: object;
myObj = []; //no error as array is also an object
myObj = test2;
myObj = myTuple;
myObj = mixed;

myObj = {};

const exampleObj = {
  prop1: "hey",
  prop2: true,
};

// exampleObj.prop2 =  23;

// type alias
// type Guitars = {
//     name: string,
//     active: boolean,
//     albums: (string | number)[]
// }

//same as type Guitars it works same as type Guitars

let guitar: Guitars;
guitar = {
  name: "Fender",
  active: true, //if you remove this property then it will give error as it is required
  albums: [1, 2, 3, "ytfy"],
};

let guitar2: Guitars;
guitar2 = {
  name: "Fender",
  active: true,
  albums: [1, 2, 3, "ytfy"],
};

guitar = guitar2; //no error as both are of same type and have same properties

type Guitars2 = {
  name: string;
  active?: boolean; //? means optional property if we will not provide this property then also it will not give error it can be either boolean or undefined
  albums: (string | number)[];
};

let guitar3: Guitars2;
guitar3 = {
  name: "Fender",
  albums: [1, 2, 3, "ytfy"],
};

const greetGuitarist = (guitarist: Guitars) => {
  return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(guitar));

//enum
// unlike most typecript features, enums are not a type-level addition to javascript. Instead, they are compile-time constructs that are compiled to javascript objects. something added to the language and runtime environment.

enum Grade {
  U,
  D,
  C,
  B,
  A,
}

console.log(Grade.C); //2 only if we will not provide value to enum then it will give index of that element
console.log(Grade[2]); //C

enum Grade2 {
  U = "U",
  D = "D",
  C = "C",
  B = "B",
  A = "A",
}
console.log(Grade2.C); //C
// console.log(Grade2[2]); //undefined

enum Grade3 {
  U = 2,
  D,
  C,
}

console.log(Grade3.C); //4 as it will start from 2 and increment by 1

// interface Guitars {
//     name?: string,
//     active: boolean,
//     albums: (string | number)[]
// }

interface Guitars {
  name?: string;
  active: boolean;
  albums: stringOrNumArray;
}

type stringOrNum = string | number;

type stringOrNumArray = (string | number)[];

// istead of writing (string | number)[] we can write stringOrNumArray in interface or type of Guitars at albums property

type userId = stringOrNum;

// why type different than interface
//  interface postId = stringOrNum; //error as interface can not be used as type

// literal types can be very useful when combined with union types to model a finite set of values which a variable can take.
let myName: "Shivam"; //only this value is allowed

let userName: "Shivam" | "Yadav" | "Shivam Yadav"; //only these 3 values are allowed
userName = "Shivam Yadav";
// userName = 'SOmething'; //error as it is not allowed

// functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello!");
logMsg(add(2, 3));

let substract = function (a: number, b: number): number {
  return a - b;
};

type Add = (a: number, b: number) => number;
// to use this type we can use it like this
let addition: Add = (a, b) => {
  return a + b;
};

type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = (a, b) => {
  return a * b;
};
let divide: mathFunction = (a, b) => {
  return a / b;
};
// this way we can use type mathFunction & we don't need to write function keyword again and again

logMsg(multiply(23, 32));
// interface is also an option to use instead of type

interface mathFunction2 {
  (a: number, b: number): number;
}
let ad: mathFunction2 = (a, b) => {
  return a + b;
};

const addAll = (a: number, b: number, c?: number): number => {
  if (c) {
    // or if(typeof c !== 'undefined')
    return a + b + c;
  }
  return a + b; //we needed this if because if we will not provide c then it will give error as c is optional parameter or unefined is not assignable to number
};

console.log(addAll(2, 3, 4));
console.log(addAll(2, 3));

// const addAll = (a?: number, b: number, c: number ): number => {
//     return a+b+c;
// } //error as optional parameter should be at last

const addall = (a: number, b: number, c: number = 4): number => {
  return a + b + c;
}; //this is also a way to provide default value to parameter
console.log(addall(2, 3)); //9 as c is 4 by default

const Addall = (a: number, b?: number, c: number = 0): number => {
  if (b) {
    return a + b + c;
  }
  return a + c;
}; // this time we can make b optional as well as provide default value to c but not to a

//******************important************************/
const sumAll = (a: number = 10, b: number, c: number = 10): number => {
  return a + b + c;
};
console.log(sumAll(undefined, 20)); //40 as a is undefined so it will take default value of a which is 10
console.log(sumAll(20, 20)); //50 as a is 20 and b is 20 and c is 10
console.log(sumAll(20, 20, 20)); //60 as a is 20 and b is 20 and c is 20
// console.log(sumAll(29))// it will give error as b is required and we are giving value to a only we must write undefined to a if we want to give value to b only

// rest parameters
const total = (a: number, ...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1)); // 0 as nums is an empty array 1 is not added to it because it is not in array of nums
logMsg(total(1, 1, 1, 1, 1, 1)); //5 as 1 is added to nums array and then reduce is applied to it

const newTotal = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(newTotal(1)); // 1 as nums is an empty array 1 is not added to it because it is not in array of nums

//**************** */
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};
// never type is used when we are sure that function will never return anything

const infiniteLoop = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 10) {
      break;
    }
  }
};
// custom type guard : type guard is a way to check the type of a variable at runtime
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};
const isString = (value: any): boolean => {
  return typeof value === "string" ? true : false;
};

const numberOrString = (value: number | string): string => {
  if (isString(value)) return "string";
  if (isNumber(value)) return "number";
  return createError("this should never happen");
};

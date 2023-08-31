// Index Signature

// interface TranscationObj {
//   Pizza: number;
//   Books: number;
//   Job: number;
// }

interface TranscationObj {
  readonly [index: string]: number;
}

const todayTranscation: TranscationObj = {
  Pizza: -100,
  Books: -200,
  Job: 300,
};

console.log(todayTranscation.Pizza);
console.log(todayTranscation["Pizza"]);

let prop: string = "Pizza";
console.log(todayTranscation[prop]);

// Vanilla Javascript
const todaysNet = (transactions: TranscationObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(todayTranscation));

// todayTranscation.Pizza = 100; will throw error if we use readonly before index: string in interface

interface Student {
  // [key: string]: any // or string | number | number[] | undefined
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "shivam",
  GPA: 3.5,
  classes: [100, 200],
};

// console.log(student.test) // undefined but no error just because of [key: string]: any

// dynamically accessing three ways
for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`); // keyof Student will give us all the keys of Student interface and we can use it as type
}
Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});
const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "name"); //output: Student name: shivam
logStudentKey(student, "GPA"); //output: Student GPA: 3.5

/////////////////////////////////////////////////////////////

// interface Incomes {
//   [key: string]: number;
// }

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number>;
const monthlyIncome: Incomes = {  
  salary: 100,
  bonus: 200,
  sidehustle: 300,
};

for(const revenue in monthlyIncome){
  console.log(`${revenue}: ${monthlyIncome[revenue as keyof Incomes]}`) //we used assertion here 
}

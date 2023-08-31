"use strict";
// Index Signature
const todayTranscation = {
    Pizza: -100,
    Books: -200,
    Job: 300,
};
console.log(todayTranscation.Pizza);
console.log(todayTranscation["Pizza"]);
let prop = "Pizza";
console.log(todayTranscation[prop]);
// Vanilla Javascript
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todayTranscation));
const student = {
    name: 'shivam',
    GPA: 3.5,
    classes: [100, 200]
};
console.log(student.test); // output

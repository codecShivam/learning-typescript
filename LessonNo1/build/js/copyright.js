"use strict";
const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear.toString());
// year.textContent = thisYear.toString();
year.innerText = thisYear.toString();
// other way without using assertion
// let year: HTMLElement | null;
// year = document.getElementById('year');
// let thisYear: string;
// thisYear = new Date().getFullYear().toString();
// if(year) {
//     year.setAttribute("datetime", thisYear);
//     year.innerText = thisYear;
// }

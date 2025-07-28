const today = new Date();

let year;
let month;
let date;

year = today.getFullYear();
month = today.getMonth()+1;
date = today.getDate();

console.log(year + '年'+ month + '月'+ date + '日');

// console.log(today.getFullYear());
// console.log(today.getMonth()+1);
// console.log(today.getDate());


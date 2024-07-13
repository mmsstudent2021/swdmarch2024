// console.dir(Date);
// console.log(Date.now());
// console.log(Date.parse('01 Jan 2021'));

// const d = new Date();
// console.dir(d);

// console.log(d.toDateString());
// console.log(d.toLocaleDateString());
// console.log(d.toTimeString());
// console.log(d.toLocaleTimeString());

// console.log("day", d.getDay());
// console.log("date", d.getDate());
// console.log("month", d.getMonth());
// console.log("year", d.getFullYear());
// console.log("hour", d.getHours());
// console.log("minute", d.getMinutes());
// console.log("second", d.getSeconds());
// console.log("second", d.getTime());

// const d = new Date("1994-7-22");
// const d = new Date(5000000000);
// const d = new Date(2024, 6, 22);
// console.log(d);
// console.log(d.toDateString());
// console.log(d.toLocaleDateString());

// const d = new Date();
// d.setHours(d.getHours() + 30);
// console.log(d);

// const d = new Date();
// d.setMonth(d.getMonth() + 3);
// console.log(d);

// const swdTotalHours = 50;
// const learningHoursPerDay = 2;
// const numberOfLearningDay = swdTotalHours / learningHoursPerDay;

// const d = new Date();
// d.setDate(d.getDate() + numberOfLearningDay);
// console.log(d);

// console.dir(String);
// console.log(String.fromCharCode(65,110,116));
// console.log(String.fromCharCode(65));

// const str = new String("San kyi tar par byar");
// console.log(str);
// console.log(str.length);
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);

// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());

// console.log(str.search("hein"));
// console.log(str.search("tar"));
// console.log(str.search("San"));

// console.log(str.replace("byar", "ha"));
// console.log(str.replace("a", "-"));
// console.log(str.replaceAll("a", "-"));

// console.log(str.substr(4, 3));
// console.log(str);

// console.log(str.substring(4, 7));
// console.log(str);

// console.log(str.slice(4, 7));
// console.log(str);

// let x = str.trim();
// console.log(x);

// const couponId = "1175"; // 8 char
// console.log(couponId.padStart(8, "X"));
// console.log(couponId.padEnd(8, "X"));

// string to array

// console.log(str.split(""));
// console.log(str.split(" "));
// console.log(str.split("a"));

// const bill = "A053-889H-67TE-33G3";
// console.log(bill.split("-"));

// const fileName = "myPhoto.jpg";
// console.log(fileName.split("."));

// const paths = "Users/sayar/Desktop/SWD/swdmarch2024/5-javascript/basic";

// console.log(paths.split("/"));

// console.dir(Number);
// console.log(Number.isInteger(5));
// console.log(Number.isInteger(5.7));

// console.log(Number.isNaN(5 + 7));
// console.log(Number.isNaN(5 - "hein"));
// console.log(Number.isNaN("b" * "a"));

// let myWeight = "111.54lb";
// let deposit = "500$";
// console.log(Number.parseInt(myWeight));
// console.log(Number.parseFloat(myWeight));
// console.log(Number.parseInt(deposit));

// const num = new Number(256773);
// console.dir(num);
// console.log(num.toString());
// console.log(num.toLocaleString());

// console.log(num.toFixed());
// console.log(num.toFixed(2));

// console.log(num.toPrecision(2));

// console.log(num.toExponential(2));

// console.dir(Math);
// console.log(Math.sqrt(16));
// console.log(Math.pow(2, 3));

// const x = 15.6;
// const y = 77.3;
// console.log(Math.ceil(x));
// console.log(Math.ceil(y));
// console.log(Math.floor(x));
// console.log(Math.floor(y));

// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

const randomNum = Math.random();
console.log(randomNum);
// 1-10
console.log(randomNum * 10);
console.log(Math.floor(randomNum * 100)); // 0-9
console.log(Math.ceil(randomNum * 100)); // 1-10
console.log((randomNum * 10).toFixed(0)); // 0-10

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRndInteger(1, 6));

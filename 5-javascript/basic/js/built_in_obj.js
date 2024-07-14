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

// const randomNum = Math.random();
// console.log(randomNum);
// // 1-10
// console.log(randomNum * 10);
// console.log(Math.floor(randomNum * 100)); // 0-9
// console.log(Math.ceil(randomNum * 100)); // 1-10
// console.log((randomNum * 10).toFixed(0)); // 0-10

// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRndInteger(1, 6));

// function area(w, h) {
//   console.log(arguments);
//   return w * h;
// }

// console.log(area.call(null, 15, 60));
// console.log(area.bind(null, 15, 60).apply());

// console.dir(Function);

// const area = new Function("w", "h", "return w * h");

// console.log(area(25, 50));
// console.dir(area);
// console.log(area.call(null,25,50));
// console.dir(area.toString());
// console.log(area.bind(null, 25, 50).apply());

// class Car {}

// const c = 1;

// const b = 1;

// console.dir(Object.is(b, c));

// const marks = {
//   mm: 45,
//   en: 72,
//   math: 96,
//   chem: 87,
//   phy: 85,
//   bio: 54,
// };

// console.log(Object.hasOwn(marks, "math"));
// console.log(Object.hasOwn(marks, "eco"));

// console.log(marks);

// console.log(marks.hasOwnProperty("math"));
// console.log(marks.hasOwnProperty("eco"));

// console.log(marks);

// console.log(Object.keys(marks));
// console.log(Object.values(marks));

// class Sample {
//   a() {
//     console.log("this is a");
//     return this;
//   }

//   b() {
//     console.log("this is b");
//     return this;
//   }

//   c() {
//     console.log("this is c");
//     return this;
//   }
// }

// const sample = new Sample();

// sample.a();

// sample.b();

// console.log(sample.a().b().b().a().c());

// apple
// ["A","P","P","L","E"]

// const str = "apple";
// console.log(str.toUpperCase().split(""));

// higher order function , callback function

// console.log("hello");

const points = [1, 5, 4, 7, 9, 8, 3];
// [3,15,21,27,9]

// [2,10,14,18,6] *2
// [10,50,70,90,30] *10

// [1,25,49,81,9] **2

// hof
function modifyArray(inputArray, x) {
  const result = [];
  let resultIndex = 0;

  for (let el of inputArray) {
    result[resultIndex++] = x(el);
  }

  return result;
}

// callback
function double(input) {
  return input * 2;
}

// console.log(points);

// console.log(
//   modifyArray(points, function (input) {
//     return input * 3;
//   })
// );
// console.log(modifyArray(points, double));
// console.log(
//   modifyArray(points, function (input) {
//     return input * 10;
//   })
// );
// console.log(
//   modifyArray(points, function (i) {
//     return i ** 2;
//   })
// );

//[4,8]
//[1, 5, 7, 9, 3]
// [7,8,9]

// function arrayFilter(inputArray, callback) {
//   const result = [];
//   let resultIndex = 0;

//   for (let el of inputArray) {
//     if (callback(el)) {
//       result[resultIndex++] = el;
//     }
//   }

//   return result;
// }

// function odd(inputPoint) {
//   return inputPoint % 2 === 0;
// }

// function even(inputPoint) {
//   return inputPoint % 2 === 1;
// }

// console.log(arrayFilter(points, odd));

// console.log(arrayFilter(points, even));

// console.log(
//   arrayFilter(points, function (inputPoint) {
//     return inputPoint >= 7;
//   })
// );

// function sum(x, y) {
//   console.log(arguments);
//   return x + y;
// }

// rest parameter
// function sum(x, y, ...num) {
//   console.log(x);
//   console.log(y);
//   console.log(num);
// }

// console.log(sum(1, 5, 8, 9, 10));

const fruits = ["orange", "mango", "banana", "lemon", "lime", "apple"];

// console.log(fruits.slice(1, 4));
// console.log(fruits.splice(1, 3));
// console.log(fruits.splice(1, 3, "aaa", "bbb", "bbb", "ccc"));

// console.log(fruits.includes("ant"));
// console.log(fruits.includes("mango"));
// console.log(fruits.indexOf("lime"));
// console.log(fruits.indexOf("ant"));

// console.log(Array.isArray(fruits));
// console.log(Array.isArray("hein htet zan"));

// fruits.sort();
// console.log(fruits);
// fruits.reverse();
// console.log(fruits.shift());
// console.log(fruits.shift());
// console.log(fruits.shift());

// console.log(fruits.pop());
// console.log(fruits.pop());
// console.log(fruits.pop());

// fruits.push("xxx");
// fruits.push("yyy");
// fruits.push("zzz");

// fruits.unshift("ccc");
// fruits.unshift("bbb");
// fruits.unshift("aaa");

// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits.toString());
// console.log(fruits.join());
// console.log(fruits.join("---"));

// console.log(fruits);
// fruits.forEach(function (el, index, arr) {
//   console.log(el);
//   console.log(index);
//   console.log(arr);
//   console.log("=================");
// });

// console.dir(Array);

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// console.log(fruits);

const nums = [1, 5, 6];
const chars = ["a", "z", "x", "e", "b"];

// console.log(
//   nums
//     .concat(chars)
//     .concat("hein htet zan")
//     .concat(nums)
//     .concat(chars)
//     .concat(fruits)
// );

console.log([...nums, ...chars, "xxx", ...fruits]);

console.log(Math.max(...nums));

// variable declare
// value assign
// reassign value

// let x = 5;
// let y = 10;
// let myName = "hein htet zan";
// let myAge = 18;
// let width = 18;
// let breadth = 60;
// let birthYear = 1994;
// let z = x + y;

// console.log(`The total of x + y equal to ${x + y}`);
// console.log("The total of x + y equal to " + (x + y));
// console.log(`Area of my room is ${width * breadth} square feet`);
// console.log(`My name is ${myName},I'm ${2024 - birthYear} years old`);

// console.log(x);
// console.log(y);
// console.log(myName);
// console.log(myAge);
// console.log(x);
// console.log(y);

// let age = 26;
// let weight = 120.65;
// let girlFriend = 0;
// let temp = -10;

// console.log(typeof age);
// console.log(age);
// console.log(weight);
// console.log(girlFriend);
// console.log(temp);

// constant - no more change

// const theEarth = "round";
// const daysInAWeek = 7;
// const nameOfGirlFriend =
// const myWeight = 120.65;
// theEarth = "flat";
// console.log(theEarth);
// value assign
// const x = 0b110; // binary
// const x = 0o16; // octal
// const x = 0x1df0; // hexa
// console.log(x);
// console.log(016/2);

// console.log(5 + 4);
// console.log(5 - 4);
// console.log(5 * 4);
// console.log(50 / 4);
// console.log(50 % 4);
// console.log(2 ** 4);

// let x = 3;

// console.log(x);

// x += 2;
// x -= 1;
// x -= 1;

// console.log(x);

// console.log("a" + "b");
// console.log("hein" + " " + "htet");

// console.log(15 + "kg");

// console.log(10 + "3");

// increment

// let x = 5;

// console.log(++x);
// console.log(++x);
// console.log(++x);

// console.log(x++);
// console.log(x++);
// console.log(x++);
// console.log(x++);

// console.log(x);

// decrement

// console.log(x--);
// console.log(x);

// let x = 5;
// let y = 7;
// let z = 5;

// console.log(x > z);
// console.log(x == z);
// console.log(x >= z);

// console.log(x == y);
// console.log(x < y);
// console.log(x > y);
// console.log(x != y);

// let x = false;

// console.log(x ? "yes" : "no");

// let haveYouFinishDinner = false;

// console.log(haveYouFinishDinner ? "I'm finish" : "not yet");

// code block

// {
//   let x = 5;
//   let y = 10;
//   console.log(x + y);
// }

// pythagoras theorem
// x2 + y2 = z2

// find age ? if you know birth year
// age = currentYear - birthYear

// function findAge(birthYear) {
//   let currentYear = 2024;
//   //   const birthYear = 1994;
//   let age = currentYear - birthYear;
//   //   console.log(age);
//   return age;
// }

// // my age 1994
// console.log(findAge(1994));

// // mg mg 2003
// console.log(findAge(2003));

// // su su 1999
// console.log(findAge(1999));

// // zaw zaw 2010
// console.log(findAge(2010));

// // area function (area = width * breadth)

// function area(width, breadth) {
//   const calcArea = width * breadth;
//   return calcArea + " sqft";
// }

// // find the area of my room. my room width is 18 and breadth 60
// console.log(area(18, 60));

// // find the area of my sister home. my room width is 12 and breadth 50
// console.log(area(12, 50));

// let x = 5;
// let y = "5";

// // normal mode
// console.log(x == y);

// // strict mode
// console.log(x === y);

// console.log(x !== y);

// console.log(y == x ? "it is true" : "it is false");

// function triangle(char = 0) {
//   console.log(`${char}`);
//   console.log(`${char} ${char}`);
//   console.log(`${char} ${char} ${char}`);
//   return "finish";
//   console.log(`${char} ${char} ${char} ${char}`);
//   console.log(`${char} ${char} ${char} ${char} ${char}`);
// }

// // call - invoke

// console.log(triangle("*"));
// triangle("x");
// triangle("a");
// triangle();

// (amount/100)*percentage

// function calculatePercentage(amount, percentage) {
//   return (amount / 100) * percentage;
// }

// // console.log(calculatePercentage(1000, 5));
// // console.log(calculatePercentage(4200000, 5));

// function calculateTotal(amount = 0, taxRate = 5) {
//   return amount + (amount / 100) * taxRate;
// }

// console.log("ice cream - ", calculateTotal(1000));
// console.log("water - ", calculateTotal(200));
// console.log("nothing - ", calculateTotal());
// console.log("KIA - ", calculateTotal(120000000, 50));
// console.log("Neta V - ", calculateTotal(70000000, 0));

// function sum(x = 0, y = 0) {
//   console.log(x + y);
// }

// sum(5, 4);
// sum();

// let x;
// console.log(x);

// console.log("*");
// console.log("* *");
// console.log("* * *");

// console.log("*");
// console.log("* *");
// console.log("* * *");

// if (false) {
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
// } else {
//   console.log("* * *");
//   console.log("* * *");
//   console.log("* * *");
// }

// const passedMark = 40;
// const yourMark = 15;

// if (yourMark >= passedMark) {
//   console.log("U pass");
// } else {
//   console.log("U fail");
// }

// low stock

// const stock = 15;

// if (stock >= 10) {
//   console.log("in stock");
// } else if (stock > 0) {
//   console.log("low stock");
// } else {
//   console.log("out of stock");
// }

// const yourMark = 30;

// if (yourMark >= 80) {
//   console.log("D");
// } else if (yourMark >= 40) {
//   console.log("P");
// } else {
//   console.log("F");
// }

for (let i = 1; i <= 15; i += 3) {
  // console.log("*");
  // console.log("* *");
  // console.log("* * *");
  console.log("loop ", i);
}

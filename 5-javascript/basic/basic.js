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

function findAge(birthYear) {
  let currentYear = 2024;
  //   const birthYear = 1994;
  let age = currentYear - birthYear;
  //   console.log(age);
  return age;
}

// my age 1994
console.log(findAge(1994));

// mg mg 2003
console.log(findAge(2003));

// su su 1999
console.log(findAge(1999));

// zaw zaw 2010
console.log(findAge(2010));

// area function (area = width * breadth)

function area(width, breadth) {
  const calcArea = width * breadth;
  return calcArea + " sqft";
}

// find the area of my room. my room width is 18 and breadth 60
console.log(area(18, 60));

// find the area of my sister home. my room width is 12 and breadth 50
console.log(area(12, 50));

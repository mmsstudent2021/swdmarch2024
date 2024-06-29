// console.log("Function Practical");

// const records = [];
// let recordIndex = 0;

// const area = function (width, breadth) {
//   const result = `${width * breadth} sqft`;
//   records[recordIndex++] = {
//     width: width + "ft",
//     breadth: breadth + "ft",
//     area: result,
//   };
//   return result;
// };

// console.log(area(15, 50));
// console.log(area(15, 60));
// console.log(area(18, 60));

// console.table(records);

// 500USD = ? MMK
// 500 * 2100 (1USD rate)
// 350SGD = ? MMK
// 970EUR = ? MMK

// 500000 mmk = ? usd
// 30000 mmk = ? sgd
// 970000 mmk = ? eur

// any currency to any currency
// 450 usd = ? sgd
// 700 sgd = ? eur
// 50 eur = ? usd

// const rates = {
//   mmk: 1,
//   usd: 2100,
//   sgd: 1551.2,
//   eur: 2246,
// };

// const exchangeToMmk = function (amount, currency) {
//   const currentCurrencyRate = rates[currency];
//   const result = `${amount * currentCurrencyRate} mmk`;
//   return result;
// };

// const exchangeToCurrency = function (amount, currency) {
//   const currentCurrencyRate = rates[currency];
//   const result = `${amount / currentCurrencyRate} ${currency}`;
//   return result;
// };

// const exchange = function (amount, fromCurrency, toCurrency) {
//   const fromCurrencyRate = rates[fromCurrency];
//   const mmk = amount * fromCurrencyRate;
//   const toCurrencyRate = rates[toCurrency];
//   const result = mmk / toCurrencyRate;
//   return `${result} ${toCurrency}`;
// };

// console.log(exchange(400, "usd", "sgd"));

// console.log(exchangeToCurrency(500000, "usd"));
// console.log(exchangeToCurrency(30000, "sgd"));
// console.log(exchangeToCurrency(970000, "eur"));

// console.log(exchangeToMmk(500, "usd"));
// console.log(exchangeToMmk(350, "sgd"));
// console.log(exchangeToMmk(970, "eur"));

// 5 apple = ?
// 3 banana = ?
// 2 mango = ?
// total
// tax
// net total

// const fruits = {
//   apple: 500,
//   orange: 700,
//   mango: 1400,
//   banana: 200,
// };

// let total = 0;

// const tax = function (amount, percentage = 5) {
//   return (amount / 100) * percentage;
// };

// const calculate = function (item, quantity) {
//   const price = fruits[item];
//   const cost = price * quantity;

//   total += cost;

//   return `${item} * ${quantity} = ${cost} mmk`;
// };

// console.log(calculate("apple", 5));
// console.log(calculate("banana", 3));
// console.log(calculate("mango", 2));
// console.log(calculate("orange", 3));

// console.log("total", total);
// console.log("tax", tax(total));
// console.log("net total", total + tax(total));

// property
// method

// const exchange = {
//   mmk: 1,
//   usd: 2100,
//   sgd: 1551.2,
//   eur: 2246,
//   // before es6
//   exchangeToMmk: function (amount, currency) {
//     const currentCurrencyRate = rates[currency];
//     const result = `${amount * currentCurrencyRate} mmk`;
//     return result;
//   },
//   // es6
//   exchangeToCurrency(amount, currency) {
//     const currentCurrencyRate = rates[currency];
//     const result = `${amount / currentCurrencyRate} ${currency}`;
//     return result;
//   },
// };

// const myself = {
//   myName: "hein htet zan",
//   gender: "male",
//   myAge: 18,
//   gf: null,
//   teach() {
//     return "I can tech Programming";
//   },
//   play() {
//     return "I can play the guitar";
//   },
// };

// const car = {
//   model: "Neta V",
//   color: "sliver",
//   range: 500,
//   drive() {
//     console.log(this);
//     return `${this.model} can drive`;
//   },
//   charge() {
//     return `${this.model} can charge`;
//   },
// };

// console.log(car.model);
// console.log(car.color);
// console.log(car.drive());
// console.log(car.charge());

// let x;

// if (true) {
//   console.log("Hello");
//   x = 10;
// } else {
//   console.log("haha");
//   x = 5;
// }

// console.log(x);

// let isMember = false;

// console.log(isMember ? "$2.00" : "$10.00");

// const wakeUpTime = 10;

// if (wakeUpTime > 8) {
//   console.log("ရိုက်ခံရမယ်");
// } else {
//   console.log("အေးဆေးပဲ");
// }

// console.log(wakeUpTime > 8 ? "ရိုက်ခံရမယ်" : "အေးဆေးပဲ" );

// let pocketMoney = 1400;
// let busTicketFee = 400;

// let totalCost = busTicketFee * 2;

// if (pocketMoney > totalCost) {
//   console.log("by bus");
//   // pocketMoney -= 400;
// } else {
//   console.log("walking");
// }

// console.log("money left", pocketMoney);

// const currentTime = 9;
// const startingTime = 10;

// if (currentTime <= startingTime) {
//   console.log("ကျောင်းမှီတယ်");
// } else {
//   console.log("You late");
// }

// age
// beauty
// skin
// tall

// logic ( AND OR NOT)

// const entranceExam = function (examMark, viberMark) {
//   if (examMark > 60 && viberMark > 60) {
//     return "U Pass";
//   }
//   return "U Fail";
// };

// console.log(entranceExam(50, 70));
// console.log(entranceExam(70, 70));
// console.log(entranceExam(70, 40));

// n,f,m

// const canYouVote = function (age, nationality) {
//   if (age >= 18 && nationality === "n") {
//     return "U can vote";
//   }
//   return "Sorry U can't vote";
// };

// console.log(canYouVote(10, "n"));
// console.log(canYouVote(19, "f"));
// console.log(canYouVote(19, "n"));
// console.log(canYouVote(60, "m"));

// const choiceBus = function (busNo) {
//   if (busNo === 20 || busNo === 65) {
//     return "U will get to MMS IT";
//   }
//   return "U will not reach";
// };

// console.log(choiceBus(19));
// console.log(choiceBus(20));
// console.log(choiceBus(100));
// console.log(choiceBus(65));

// for (
//   let i = (function () {
//     console.log("1st Statement");
//     return 1;
//   })();
//   (function () {
//     let condition = i <= 5;
//     console.log("2nd Statement", i, condition);
//     return condition;
//   })();
//   (function () {
//     i++;
//     console.log("3rd statement", i);
//     console.log("=============");

//     return i;
//   })()
// ) {
//   console.log("code block loop", i);
// }

// for (let i = 1; i <= 10; i++) {

//   console.log("loop", i);

//   if (i === 5) {
//     break;
//   }

// }

const fruits = ["apple", "banana", "cherry", "elderberry"];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);

// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for of
// x - iterator
// for (x of fruits) {
//   console.log(x);
// }

// for in
// for (x in fruits) {
//   console.log(fruits[x]);
// }
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  color: "Blue",
  mileage: 25000,
};

for (x in car) {
  console.log(x, car[x]);
}

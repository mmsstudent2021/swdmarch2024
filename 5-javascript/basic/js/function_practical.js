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

// const exchange = function (amount, fromCurrency, toCurrency) {};

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

const fruits = {
  apple: 500,
  orange: 700,
  mango: 1400,
  banana: 200,
};

let total = 0;

const tax = function (amount, percentage = 5) {
  return (amount / 100) * percentage;
};

const calculate = function (item, quantity) {
  const price = fruits[item];
  const cost = price * quantity;

  total += cost;

  return `${item} * ${quantity} = ${cost} mmk`;
};

console.log(calculate("apple", 5));
console.log(calculate("banana", 3));
console.log(calculate("mango", 2));
console.log(calculate("orange", 3));

console.log("total", total);
console.log("tax", tax(total));
console.log("net total", total + tax(total));

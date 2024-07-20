// function run() {
//   return "this is run";
// }

// const run = function () {
//   return "this is run";
// };

// const run = () => "this is run";

// console.log(run());

// const showName = function (name) {
//   return `I'm ${name}`;
// };

// const showName = (name) => `I'm ${name}`;

// console.log(showName("hein htet zan"));

// const area = function (w, h) {
//   return w * h;
// };

// const area = (w, h) => w * h;

// console.log(area(15, 50));

// 1994-07-22

// const findAge = function (birthDay) {
//   const bdDate = new Date(birthDay);
//   const bdYear = bdDate.getFullYear();

//   const nowDate = new Date();
//   const nowYear = nowDate.getUTCFullYear();

//   return nowYear - bdYear;
// };

const findAge = (birthDay) => {
  const bdDate = new Date(birthDay);
  const bdYear = bdDate.getFullYear();

  const nowDate = new Date();
  const nowYear = nowDate.getUTCFullYear();

  return nowYear - bdYear;
};

console.log(findAge("1994-07-22"));

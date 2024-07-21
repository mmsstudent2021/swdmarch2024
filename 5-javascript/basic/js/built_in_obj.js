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

// const points = [1, 5, 4, 7, 9, 8, 3];
// [3,15,21,27,9]

// [2,10,14,18,6] *2
// [10,50,70,90,30] *10

// [1,25,49,81,9] **2

// hof

// function modifyArray(inputArray, x) {
//   const result = [];
//   let resultIndex = 0;

//   for (let el of inputArray) {
//     result[resultIndex++] = x(el);
//   }

//   return result;
// }

// callback
// function double(input) {
//   return input * 2;
// }

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

// const fruits = ["orange", "mango", "banana", "lemon", "lime", "apple"];

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

// const nums = [1, 5, 6];
// const chars = ["a", "z", "x", "e", "b"];

// console.log(
//   nums
//     .concat(chars)
//     .concat("hein htet zan")
//     .concat(nums)
//     .concat(chars)
//     .concat(fruits)
// );

// console.log([...nums, ...chars, "xxx", ...fruits]);

// console.log(Math.max(...nums));

// const fruits = ["orange", "mango", "banana", "lemon", "lime", "apple"];

// console.log(
//   fruits.reduce(function (pv, cv) {
//     return pv + cv;
//   }),
//   ""
// );

// console.log(fruits.join(""));

// console.dir(Array);

// const x = fruits.forEach(function (el) {
//   console.log(el);
// });

// console.log(x);

// const y = fruits.map(function (el) {
//   console.log(el);
//   return el + " - " + el.length;
// });
// console.log(y);

// const points = [1, 5, 4, 7, 9, 18, 3];

// console.log(points.some(function(el){
//   return el > 5;
// }));

// console.log(points.every(function(el){
//   return el > 0;
// }));

// const totalPoint = points.reduce(function (pv, cv) {
//   console.log(pv, cv);
//   return pv + cv;
// }, 0);

// console.log(totalPoint);

// const r = points.filter(function (el) {
//   console.log(el);
//   return el % 2 === 0; // even
// });

// const r = points.find(function (el) {
//   console.log("loop",el);
//   return el % 2 === 0; // even
// });

// const r = points.findIndex(function (el) {
//   console.log("loop", el);
//   return el % 2 === 0; // even
// });

// console.log(r);

// const evenPoints = points.filter(function (el) {
//   return el % 2 === 0;
// });

// console.log(evenPoints);

// const oddPoint = points.filter(function (el) {
//   return el % 2 === 1;
// });
// console.log(oddPoint);

// 3,15,12
// 1,25,16

// const result = points.map(function (el) {
//   return el * 3;
// });

// console.log(result);

// const result2 = points.map(function (el) {
//   return el ** 2;
// });

// console.log(result2);

const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 250,
    },
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: {
      rate: 2.2,
      count: 140,
    },
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: {
      rate: 2.6,
      count: 235,
    },
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    rating: {
      rate: 2.9,
      count: 340,
    },
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: {
      rate: 3.8,
      count: 679,
    },
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    rating: {
      rate: 4.5,
      count: 146,
    },
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
];

console.table(products);

// products.sort((a, b) => a.id - b.id); // id asc

// products.sort((a, b) => b.id - a.id); // id desc

// products.sort((a, b) => a.price - b.price); // price asc
// products.sort((a, b) => b.price - a.price); // price desc
// products.sort((a, b) => a.rating.rate - b.rating.rate); // rating asc
products.sort((a, b) => b.rating.rate - a.rating.rate); // rating asc

console.table(products);

// const [first, second, third] = products
//   .filter(({ price, rating: { rate } }) => price < 100 && rate >= 4)
//   .map(({ id, title, price, rating: { rate } }) => ({
//     id,
//     title,
//     price: (price + 10).toFixed(2),
//     rate,
//   }));

// console.log(first);
// console.log(second);
// console.log(third);

// console.table(saleProducts);

// const selectedProducts = products
//   .filter(function (el) {
//     return el.price < 100;
//   })
//   .map(function (el) {
//     return {
//       id: el.id,
//       title: el.title,
//       price: el.price + 100,
//     };
//   })
//   .reduce(function (pv, cv) {
//     return pv + cv.price;
//   }, 0)
//   .toFixed(0);

// const selectedProducts = products
//   .filter((el) => el.price < 100)
//   .map((el) => ({ id: el.id, price: el.price + 100 }))
//   .reduce((pv, cv) => pv + cv.price, 0);

// console.table(selectedProducts);

// const priceTotal = products.reduce(function (pv, cv) {
//   // console.log(pv, cv.price);
//   return pv + cv.price;
// }, 0);

// console.log(priceTotal.toFixed(2));

// id 9, id 16, id 19 , id 5

// const selectedId = [5, 9, 16, 19];
// const y = [5, 9, 16, 19];

// const selectedProducts = products.filter(function (el) {
//   return el.id === 9 || el.id === 16 ;
// });

// const selectedProducts = products.filter(function (el) {
//   return y.includes(el.id) === false;
// });

// const selectedProducts = products.filter(function (el) {
//   return el.id !== 5;
// });

// const selectedProducts = products.filter(function (el) {
//   return el.price > 100 && el.price < 150;
// });

// console.table(selectedProducts);

// const saleProducts = products.filter(function (el) {
//   return el.price < 100;
// });

// console.table(saleProducts);

// const marks = {
//   mm: 45,
//   en: 35,
//   math: 96,
//   chem: 87,
//   phy: 26,
//   bio: 54,
// };

// const markArr = Object.values(marks);

// console.log(markArr);

// const results = markArr.map(function (el) {
//   return el >= 40 ? "Passed" : "Failed";
// });

// console.log(results);

// console.table(products);

// const saleProducts = products.map(function (el) {
//   return {
//     id: el.id,
//     title: `MMS ${el.title}`,
//     price: el.price + 100,
//   };
// });
// console.table(saleProducts);

// const arr = ["x", "y", "z"];
// const [a, b] = ["x", "y", "z"];

// console.log(a);
// console.log(b);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// const { x, y, z } = { x: "aaa", y: "bbb", z: "ccc" };

// // console.log(obj.x);
// // console.log(obj.y);
// // console.log(obj.z);

// console.log(x);
// console.log(y);
// console.log(z);

// const fruits = [
//   "banana",
//   "mango",
//   "သခွားသီး",
//   "apple",
//   "မာကလာသီး",
//   "orange",
//   "pineapple",
//   "ကွဲကော်သီး",
// ];

// console.log(fruits);

// // fruits.sort()
// fruits.sort((a, b) => {
//   console.log(b.localeCompare(a));
//   return b.localeCompare(a);
// });

// console.log(fruits);
// console.log(arr);

// for (let i in arr) {
//   arr[i] = arr[i].toUpperCase();
// }

// const newArr = arr.map((el) => el.toUpperCase());

// console.log(newArr);

// console.log(arr);

// console.log(arr);

// console.log(arr.splice(1,3));
// console.log(arr.slice(2, 4));

// console.log(arr);

// console.log(arr);

// const fruits = [...arr, "orange"];

// console.log(fruits);

// console.log(arr);

// arr.push("orange");

// console.log(arr);

// arr[1] = "orange";

// console.log(arr);

// const obj = { x: 10, y: 20, z: 30 };

// console.log(obj);

// obj.y = 50;

// console.log(obj);

// const str = "hein htet zan";

// console.log(str);

// str[2] = "a";

// console.log(str);

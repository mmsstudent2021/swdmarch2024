// const points = [34, 15, 2, 52, 19, 56, 30, 57];
// const funds = [100, 600, 300, 700];
// const marks = [50, 60, 70, 65, 93, 46];

// console.log(points);

// want -> point total
// want -> funds total
// want -> marks total

// const arraySum = function (arrayInput) {
//   let total = 0;
//   for (el of arrayInput) {
//     total += el;
//   }
//   return total;
// };

// console.log(arraySum(points));
// console.log(arraySum(funds));
// console.log(arraySum(marks));

// let total = 0; // state

// // total += 34
// // total += 15
// // total += 2
// // total += 52
// for (el of points) {
//   total += el;
// }

// console.log(total);

// console.log(points.reduce((pv,cv) => pv+cv ));

const st5 = {
  id: 156,
  name: "Mg Mg",
  gender: "male",
  learn() {
    return this.name + " can learn";
  },
  read() {
    return this.name + " can read";
  },
};

// console.log(st5);
// console.log(st5.learn());

// class UserInformation {

// }

// class Student {
//   // id,name,gender
//   id = 123;
//   name = "hhz";
//   gender = "male";

//   constructor(){
//     console.log("I work automatically when you instantiate");
//   }

//   learn() {
//     return this.name + "can learn";
//   }

//   read() {
//     return this.name + " can read";
//   }
// }
// const me = new Student;
// console.log(me);
// console.log(me.id);
// console.log(me.name);
// console.log(me.gender);
// console.log(me.learn());
// console.log(me.read());

// const st1 = new Student;// instantiate
// st1.id = 165;
// st1.name = "mg mg"
// st1.gender = "male"
// console.log(st1);

// const st2 = new Student;
// st2.name = "su su"
// st2.id = 175;
// st2.gender = "female";
// console.log(st2);

// const st3 = new Student;
// st3.name = "aye aye"
// st3.id = 65;
// st3.gender = "female";
// console.log(st3);

// console.log(new Student);

// function run() {
//   return "run";
// }
// console.log(run);

// class Student {
//   static x = 5;
//   static run() {
//     return "I'm run";
//   }

//   // private property
//   #subjects = {
//     swd: ["html", "css", "js"],
//     wad: ["php", "oop", "mysql", "laravel"],
//   };

//   constructor(inputId, inputName, inputGender, inputMajor) {
//     // data initialize
//     this.id = inputId;
//     this.name = inputName;
//     this.gender = inputGender;
//     this.major = inputMajor;
//   }

//   showSubject() {
//     return this.#subjects[this.major];
//   }

//   learn() {
//     return this.name + " can learn";
//   }
// }

// console.log(Student.run());
// console.log(Student.x);

// const me = new Student(136, "hein htet zan", "male", "swd");
// console.log(me);
// // console.log(me.learn());
// console.log(me.major);
// console.log(me.name);
// console.log(me.id);
// console.log(me.learn());
// // console.log(me.#subjects);
// console.log(me.showSubject());

// const st1 = new Student(165, "Mg Mg", "male", "wad");
// console.log(st1);
// // console.log(st1.learn());
// console.log(st1.major);

// const st2 = new Student(147, "Su Su", "female", "swd");
// // console.log(st2);

// const st3 = new Student(46, "Aye Aye", "female", "swd");
// // console.log(st3);

// const st4 = new Student(15, "Zaw Zaw", "male", "wad");
// // console.log(st4);

// console.dir(Date);

// console.log(Date.now());

// const now = new Date();
// console.dir(now);
// console.log(now.toDateString());

// class Person {
//   // name,age
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }

//   talk() {
//     return this.name + " can talk";
//   }
// }

// class Student extends Person {
//   constructor(name, age, gender, major) {
//     super(name, age, gender);
//     this.major = major;
//   }
//   learn() {
//     return `${this.name} can learn`;
//   }
// }

// class Monitor extends Student {
//   constructor(name, age, gender, major, roomNo) {
//     super(name, age, gender, major);
//     this.roomNo = roomNo;
//   }
//   command() {
//     return `${this.name} can command student from room ${this.roomNo}`;
//   }
// }

// const me = new Person("hein htet zan", 18, "male");
// console.log(me);
// console.log(me.talk());

// const st1 = new Student("Mg Mg", 16, "male", "swd");
// console.log(st1);
// console.log(st1.talk());
// console.log(st1.learn());

// const st2 = new Student("Su Su", 17, "female", "wad");
// console.log(st2);

// const m1 = new Monitor("Kyaw Kyaw", 17, "male", "swd", 5);
// console.log(m1);
// console.log(m1.name);
// console.log(m1.learn());
// console.log(m1.talk());
// console.log(m1.command());

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return `U deposit ${amount}.Money update is ${this.#balance}`;
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      return `U withdraw ${amount}. Money update ${this.#balance}`;
    }
    return `${amount} is not allowed`;
  }

  checkBalance() {
    return `Money is ${this.#balance}`;
  }

  // getter, setter methods
  // getter() {
  //   return this.#balance === 0 ? "no money" : this.#balance;
  // }

  // setter(amount) {
  //   this.#balance += amount;
  // }
}

const myBankAccount = new BankAccount();
console.log(myBankAccount.deposit(500));
console.log(myBankAccount.deposit(3000));
console.log(myBankAccount.withdraw(1500));
console.log(myBankAccount.checkBalance());
// myBankAccount.balance += 100;
// console.log(myBankAccount);
// myBankAccount.setter(100);
// myBankAccount.setter(200)
// console.log(myBankAccount.getter());
// console.log(myBankAccount.#balance);

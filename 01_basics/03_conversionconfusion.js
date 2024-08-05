let score = "33abc"
// console.log(typeof score);
// console.log(typeof(score)); // both are same

// if I neended in number 

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33"=>33
// "33abc"=>NaN(None A Number)
// "true"=1; "false"=0;
// undefined = undefined
// null = 0;


// if I need in boolean
let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)
// console.log(booleanisLoggedIn);

// 1 = true;  0=false;
// " "=false; "Ankit"=true;

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ***************Operation*************


let value = 3
let negvalue = -value
// console.log(value);

// these are operation
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3); 2^3
// console.log(2 / 2);
// console.log(2 % 2); for remainder

let str1 = "hello"
let str2 = " Ankit"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 1);
// console.log(1 + "1");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2"); string > number;

let num1, num2, num3
num1 = num2 = num3 = 2 + 2;
// console.log(num3);

let gameCounter = 100
++gameCounter;
console.log(gameCounter); //prefix and postflix study form Mdn

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

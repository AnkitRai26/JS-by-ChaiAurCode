let score = "33abc"
console.log(typeof score);
console.log(typeof(score)); // both are same

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
console.log(booleanisLoggedIn);

// 1 = true;  0=false;
// " "=false; "Ankit"=true;

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

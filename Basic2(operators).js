//============= Arithmetic Operators==================
// let a = 10
// let b = 5

// console.log("Sum:",a+b)
// console.log("Substraction:",a-b)
// console.log("Multiplication:",a*b)
// console.log("Division:",a/b)
// console.log("Modulus:",a%b)
// console.log("Power:",a**b)
// console.log("Increment:",++a)
// console.log("Decrement:",--b)

//================== Assignment Operators============
// let x = 10
// x+=5 
// console.log(x)

// let y = 10
// y-=5
// console.log(y)

// let z = 10
// z*=5
// console.log(z)

// let e = 10
// e/=5
// console.log(e)

//======================= Comparison Operators==============
// let a = 10
// let b = 20
// console.log(a==b)
// console.log(a!=b)
// console.log(a>b)
// console.log(a<b)
// console.log(a>=b)
// console.log(a<=b)

// =============Logical Operators===========
// let a = 10
// let b = 5
// console.log(a==10 && b==5)
// console.log(a==12 && b==5)
// console.log(a==24 && b==67)

// console.log(a==10 || b==5)
// console.log(a==9 || b==5)
// console.log(a==7 || b== 3)

// let c = 12
// let d = 12
// console.log(!(c==d))

//========== Ternary Operator ==============
// Check odd or even number
// let a = 0
// let result = a > 0 ? "Positive" : a<0 ? "Negative" : "Zero"
// console.log(result)

// Check major or minor
// let age = 2
// let checkVote = age > 18 ? "Major" : "Minor"
// console.log(checkVote)

// check Grade
// let mark = 85
// let grade = mark < 0 || mark > 100 ? "Invalid Mark" : mark >=90 ? "A Grade" : mark >= 80 ? "B Grade" : mark >= 70 ? "C Grade" : mark >=60 ? "D Grade" : mark >= 50 ? "E Grade" : "Fail"
// console.log(grade)

// Check letter or Digit
let ch = "H"
let result = (ch >= "A" && ch <= "Z") ? "Uppercase" :
            (ch >= "a" && ch <= 'z') ? "Lowercase" :
            "Digit" 
console.log(result)

//================Type Operators===============
var person="Abhinanda"
console.log(person);
console.log(typeof person);

var num=10;
console.log(num);
console.log(typeof num);

var bool=true
console.log(bool);
console.log(typeof bool);

var data=null
console.log(data);
console.log(typeof data);

var a;
console.log(a);
console.log(typeof a);

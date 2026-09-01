//=========== Sum ============
let a = 10;
let b = 20;
let sum = a+b;
console.log("Sum:",sum)

//========Print Details===============
let name = "Abhinanda";
let age = 29;
let place = "Kakkodi";
console.log("Name:",name,"\n","Age:",age,"\n","Place:",place,"\n")

//=============Area of the Rectangle============
let length = 12;
let breadth = 10;
let area = length * breadth;
console.log("Area:",area);

//==============Celsius to Fahrenheit==============
let Celsius = 30;
let farenheat = (Celsius * 9/5) + 32;
console.log("Farenheat:",farenheat);

//===============Arithmetical Operations==========
let x = 10;
let y = 12;
console.log("Addition:",x+y);
console.log("Substraction:",x-y);
console.log("Multiplication:",x*y);
console.log("Division:",x/y);
console.log("Remainder:",x%y);
console.log("Exponential:",x**y);

//===================Even or Odd==================================
let num = 26;
if (num % 2 == 0)
{
    console.log("Even Number")
}
else
{
    console.log("Odd Number")
}

//==============Check Eligibility====================
let age1 = 39;
if (age1 > 18)
{
    console.log("Eligible")
}
else
{
    console.log("Ineligible")
}

//===============Multiple Conditions=====================
let age2 = 24;
let hasId = false;
if (age2 >= 18 && hasId === true)
{
    console.log("Allowed");
}
else
{
    console.log("Not allowed")
}
//======================================================
let d = 5;

//Post-increment
console.log(d++)
console.log(d+3)

let c = 5;

//Pre-increment
console.log(++c)
console.log(c+4)

//==============Ternary Operator===============
let age3 = 78;
let result = age3 >= 18 ? "Major" : "Minor";
console.log(result);

//==========String Concatenation===================
let fname = "Abhinanda";
let sname = "Vipindas";
let concatenated = fname + " " + sname;
console.log(concatenated);

//============Template Literals======================
let name2 = "Abhinanda";
let age4 = 29;
let place2 = "Kakkodi";
console.log(`My name is ${name2}, my age is ${age4} and my place is ${place2}`);

//==============Student Result============================
let mark1 = 78;
let mark2 = 90;
let mark3 = 98;
let total = mark1 + mark2 +mark3;
let average = total /3;
console.log(`\nTotal:${total} \n Average:${average}`)

if (average >= 50)
{
    console.log("Pass");
}
else
{
    console.log("Fail");
}

//=============Check positive or Negative or zero======
let num1 = 0;
let result1 = num1 > 0 ? "Positive" : num1 < 0 ? "Negative" : "Zero" ;
console.log(result1)

//============Find biggest number among two numbers========
let n1 = 23;
let n2 = 6;
let biggest = n1 > n2 ? `Biggest number is ${n1}` : `Biggest number is ${n2}`
console.log(biggest)

//===========Find largest number among 3 numbers=============
let nu1 = 7;
let nu2 = 45;
let nu3 = 56;
let largest = nu1 > nu2 && nu1 >nu3 ? `Largest number is ${nu1}` : nu2 > nu3 ? `Largest number is ${nu2}` : `Largest number is ${nu3}`;
console.log(largest);

//=============Even or Odd======================================
let j = 52;
let evenorodd = j % 2 == 0 ? "Even" : "Odd";
console.log(evenorodd)

//============5 marks=========================================
let m1 = 71;
let m2 = 87;
let m3 = 66;
let m4 = 99;
let m5 = 91;
let total1 = m1+m2+m3+m4+m5;
let average1 = total1 / 5;
let result2 = average1 >= 50 ? "Pass" : "Fail";
console.log(result2);

//=================Age Display================================
let age5 = 89;
let result3 = age5 >= 0 && age5 <=12 ? "Child" : age5 >= 13 && age5 <= 19 ? "Teenager" : age5 >= 20 && age5 <=59 ? "Adult" : "Senior citizen";
console.log(result3) 

//============Check a number is between 5 and 10 ==================
let checkingnumber = 6;
let result4 = checkingnumber > 5 && checkingnumber < 10 ? "Number is between 5 and 10" : "Number is not between 5 and 10";
console.log(result4);

//================Simple Login Check=======================
username = "Abhinanda";
password = "1234";
if (username == "Abhinanda" && password == "1234")
{
    console.log("Login Successfull")
}
else
{
    console.log("Login Failed")
}

//=================let,const,var================
let school = "G H S S Iringallur";
var years = 45;
const pi = 3.14;
var indian = true;
console.log(typeof school);
console.log(typeof years);
console.log(typeof pi);
console.log(typeof indian);

//============================Template Literals===========
let name3 = "Vipindas";
let age6 = 40;
let course = "Python Fullstack Development";
let mark = 99;
console.log(`\nName:${name3}\nAge:${age6}\nCourse:${course}\nMark:${mark}`);




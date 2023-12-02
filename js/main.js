// ---1 ------------------------------------
var num1 = prompt("print number")
console.log(num1);

// ---2 ------------------------------------
// var num2 = prompt("number can divide by 3 and 4 ")
// if (num2 % 4 == 0 && num2 % 3 == 0) {
//     console.log("yes");
// } else {
//     console.log("no");
// }

// ---3 ------------------------------------
// var num3 = Number(prompt("num 1?"))
// var num4 = Number(prompt("num 2?"))
// if (num3 > num4) {
//     console.log(num3);
// } else {
//     console.log(num4);
// }

// ---4 ------------------------------------
// var num5 = prompt("negative or positive.")
// if (num5 > 0) {
//     console.log("positive")
// } else {
//     console.log("negative")
// }

// ---5 ------------------------------------
// var num6 = Number(prompt("enter 3 number"))
// var num7 = Number(prompt("enter 3 number"))
// var num8 = Number(prompt("enter 3 number"))
// if (num6 > num7 && num6 > num8) {
//     console.log("MAX:" + num6)
// } else if (num7 > num6 && num7 > num8) {
//     console.log("MAX:" + num7)
// } else if (num8 > num6 && num7 < num8) {
//     console.log("MAX:" + num8)
// }
// if (num6 < num7 && num6 < num8) {
//     console.log("MIN:" + num6)
// } else if (num7 < num6 && num7 < num8) {
//     console.log("MIN:" + num7)
// } else if (num8 < num6 && num7 > num8) {
//     console.log("MIN:" + num8)
// }


// ---6 ------------------------------------
// var num9 = Number(prompt("enter odd or even "))
// if (num9 % 2 == 0) {
//     console.log("even number ")
// } else {
//     console.log("odd number ")
// }


// ---7 ------------------------------------
// var stringtext = prompt("vowel or Consonant")
// if (stringtext == 'a' || stringtext == 'e' || stringtext == 'I' || stringtext == 'o' || stringtext == 'u') {
//     console.log("vowel");
// } else {
//     console.log("Consonant");
// }

// ---8 ------------------------------------
// var loopnum = Number(prompt("counter number"))

// for (let i = 1; i <= loopnum; i++) {
//     console.log(i);
// }

// ---9 ------------------------------------
// var multipli = prompt("Number")

// for (let i = 1; i <= 12; i++) {
//     console.log(multipli + "*" + i + "=" + multipli * i)
// }

// ---10 ------------------------------------
// var even = Number(prompt("even number"))

// for (let i = 1; i <= even; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// ---11 ------------------------------------
// var num10 = Number(prompt("number"))
// var thepower = Number(prompt("the power"))
// var mult = 1
// for (let i = 0; i < thepower; i++) {
//     mult *= num10
// }
// console.log(mult)

// ---12 ------------------------------------
// var subjectOne = Number(prompt(" subject 1"))
// var subjectTwo = Number(prompt(" subject 2"))
// var subjectThree = Number(prompt(" subject 3"))
// var subjectFour = Number(prompt(" subject 4"))
// var subjectFive = Number(prompt(" subject 5"))
// var sum = subjectOne + subjectTwo + subjectThree + subjectFour + subjectFive
// console.log("Total marks: " + sum);
// console.log("Average Marks: " + (sum / 5));
// console.log("Percentage: " + (sum / 5) + "%");

// ---13 ------------------------------------
// var month = Number(prompt("Number of days in a month"))
// if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
//     console.log("Days in Month: 31");
// } else if (month == 4 || month == 6 || month == 9 || month == 11) {
//     console.log("Days in Month: 30");
// } else if (month == 2) {
//     console.log("Days in Month: 28 || 29");

// }

// ---14 ------------------------------------

// var subjectOne = Number(prompt(" subject Physics,"))
// var subjectTwo = Number(prompt(" subject Chemistry,"))
// var subjectThree = Number(prompt(" subject Biology,"))
// var subjectFour = Number(prompt(" subject Mathematics"))
// var subjectFive = Number(prompt(" subject Computer"))
// var sum = subjectOne + subjectTwo + subjectThree + subjectFour + subjectFive
// console.log("Total marks: " + sum);
// console.log("Average Marks: " + (sum / 5));
// if ((sum / 5) >= 90) {
//     console.log("Grad A");
// } else if ((sum / 5) >= 80) {
//     console.log("Grad B");
// } else if ((sum / 5) >= 70) {
//     console.log("Grad C");
// } else if ((sum / 5) >= 60) {
//     console.log("Grad D");
// } else if ((sum / 5) >= 40) {
//     console.log("Grad E");
// } else if ((sum / 5) < 40) {
//     console.log("Grad F");
// }

// *********** Using switch case***************

// ********* 1 

// var month = Number(prompt("Number of days in a month"))
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("Days in Month: 31");
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("Days in Month: 30");
//         break;
//     case 2:
//         console.log("Days in Month: 28 || 29");
//         break;
// }

//*******2
// var stringtext = prompt("vowel or Consonant")

// switch (stringtext) {
//     case 'a':
//     case 'e':
//     case 'o':
//     case 'i':
//     case 'u':
//         console.log("vowel");

//         break;

//     default:
//         console.log("Consonant");
//         break;
// }
//*******3
// var num3 = Number(prompt("num 1?"))
// var num4 = Number(prompt("num 2?"))
// switch (num3 > num4) {
//     case true:
//         console.log(num3);
//         break;

//     default:
//         console.log(num4);
//         break;
// }
//*******4
// var num9 = Number(prompt("enter odd or even "))
// switch (num9 % 2 == 0) {
//     case true:
//         console.log("even number ");
//         break;

//     default:
//         console.log("odd number ");
//         break;
// }
//*******5
// var num5 = prompt("negative or positive.")
// switch (true) {
//     case (num5 > 0):
//         console.log("positive")
//         break;
//     case num5 < 0:
//         console.log("negative")
//         break;
//     case num5 == 0:
//         console.log("Zero")
//         break;
// }
//*******5
// var number1 = Number(prompt("please enter number one"))
// var marks = prompt("please enter Math marks")
// var number2 = Number(prompt("please enter number Two"))
// switch (true) {
//     case marks == "+":
//         console.log(number1 + number2)
//         break;
//     case marks == "-":
//         console.log(number1 - number2)
//         break;
//     case marks == "*":
//         console.log(number1 * number2)
//         break;
//     case marks == "/":
//         console.log(number1 / number2)
//         break;
// }
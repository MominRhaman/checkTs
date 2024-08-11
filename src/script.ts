// function multiply(a : number, b: number) {
//     return a * b;
// }

// console.log(multiply(10, 4));

// array ==================================

// let fruits = ["apple", "Lichu",  "banana"];


// fruits.push("apple");

// let mixed = ["apple", 5 , true , {}];

// mixed.push({
//     name: "Momin"
// });

// =====================================

// Object +++

// let person = {
//     name: "Mashrafi",
//     age: 35,
//     isCaptain: true,
// };

// // person.name = "Momin"

// person.age = 35;




function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== "number" || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!');
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
    return result;
    }
}

const number1 = 5; //5.0
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);

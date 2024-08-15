"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    //     if (resultConversion === 'as-number') {
    //         return +result;
    //     } else {
    //     // const result = input1  + input2;
    //     return result.toString();
    //   } 
}
const combinedAges = combine(30, 27, 'as-number');
console.log(combinedAges);
const combinedStringAges = combine('30', '27', 'as-number');
console.log(combinedStringAges);
const combinedNames = combine('Momin', 'Annie', 'as-text');
console.log(combinedNames);

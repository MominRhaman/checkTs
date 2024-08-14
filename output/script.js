"use strict";
function combine(input1, input2) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // const result = input1  + input2;
    return result;
}
const combinedAges = combine(30, 27);
console.log(combinedAges);
const combinedNames = combine('Momin', 'Annie');
console.log(combinedNames);

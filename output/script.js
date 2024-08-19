"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'Momin';
if (typeof userInput === 'string') {
    userName = userInput;
}
;
function generateError(massage, code) {
    throw { massage: massage, errorCode: code };
}
;
generateError('An Error Occurred', 500);
// console.log(result);

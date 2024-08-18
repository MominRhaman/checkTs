let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Momin';

if (typeof userInput === 'string') {
    userName = userInput;
};

function generateError (massage: string, code: number) {
    throw { massage: massage, errorCode: code};
};

const result = generateError('An Error Occurred', 500);
console.log(result);

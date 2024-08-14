// const person: {
//     name: string;
//     age: number;
//     nickname: string;
//     hobbies: string[];
//     role: [number, string];
// } = {
// // const person = {
//     name: 'Mr. Mominur Rhaman',
//     age: 27,
//     nickname: 'Momin',
//     hobbies: ['Sports', 'Cooking'],
//     role: [2 , 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR'}

const person = {
    name: 'Momin',
    age: 27,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR

};
// person.role.push('admin');
// person.role[1] = 10;

// person.role  = [0 , 'admin', 'user'];

let favoraiteActivities: any[];
favoraiteActivities = ['Sports'];
 
console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); !!! ERORR !!!  
};

if (person.role === Role.AUTHOR) {
console.log('is author');
};

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
let count=0;
for (const i in student) {
    count++;
}
console.log(count);
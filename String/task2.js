const name = 'My name is Kaito SAn';

let countSmall =0;
let countCapital = 0;
for (let i=0; i<name.length; i++) {
 if (name[i] == 'a' ) {
    countSmall++;
 }
 if (name[i] == 'A' ) {
    countCapital++;
 }
}

console.log("a :", countSmall);
console.log("A :", countCapital);
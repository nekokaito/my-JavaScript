const name = 'Xperss Yaytoo Bix';

let modName = '';
for (let i=0; i<name.length; i++) {
 if (name[i] == 'x' ) {
    modName += 'y';
 }
 else if (name[i] == 'X' ) {
    modName += 'Y';
 }
 else {
    modName += name[i];

 }

}
console.log(modName);


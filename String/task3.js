const name = 'My name is Kaito San';

let isVol = false;
for (let i=0; i<name.length; i++) {
 if (name[i] == 'a' && 'e' && 'i' && 'o' && 'u') {
     isVol = true;
 }
}
if (isVol) {
    console.log('It contain vowel');
}
else {
    console.log('Not');
}
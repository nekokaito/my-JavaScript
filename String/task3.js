const name = 'My name is Kaito San';

let isVol = false;
for (let i=0; i<name.length; i++) {
 if (name[i] == 'a' && name[i] == 'e' && name[i] == 'i' && name[i] == 'o' && name[i] == 'u') {
     isVol = true;
 }
}
if (isVol) {
    console.log('It contain vowel');
}
else {
    console.log('Not');
}
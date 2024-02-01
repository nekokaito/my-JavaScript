const word = "I have a big monitor";
let modWord = '';
for (let i = 0 ; i<word.length; i++) {

    if (word[i]===' ') {
       modWord +=  word[i+1].toUpperCase();
        
    }
    else {
         modWord += word[i];
    }
}
console.log(modWord);
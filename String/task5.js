const sentence = "i love ayaka";
const words = sentence.split(' ');
for (let i = 0; i < words.length; i++) {
  words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
const cSentence = words.join(' ');
console.log(cSentence);
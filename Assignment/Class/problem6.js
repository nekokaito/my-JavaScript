function makeCapital(string) {
    
    let words = string.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    let capitalSentence = words.join(" ");

    return capitalSentence;
}

let sentence = "my name is kaito";

console.log(makeCapital(sentence)); 

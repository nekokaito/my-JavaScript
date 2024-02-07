function checkName(name) {
    const size = name.length;
    const lastLetter = name[size-1];
    let type = '';
    if (typeof(name) === 'string') {
        if (lastLetter == 'a' || lastLetter == 'y' ||lastLetter == 'i' ||lastLetter == 'e' ||lastLetter == 'o' ||lastLetter == 'u' ||lastLetter == 'w' || lastLetter == 'A' || lastLetter == 'Y' ||lastLetter == 'I' ||lastLetter == 'E' ||lastLetter == 'O' ||lastLetter == 'U' ||lastLetter == 'W') {
                type = 'Good Name';
            }
            else {
                type = 'Bad Name';
            }
            return type;
        } 
        else {
            return 'invalid';
        } 

    }

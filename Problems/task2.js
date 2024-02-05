function smallName (name) {
    let small_name = name[0];
    
    for (let i = 0 ; i<name.length; i++) {
        if (small_name.length > name[i].length) {
                small_name = name[i];
        }
    }
    return small_name;
}

const name = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

console.log(smallName(name));
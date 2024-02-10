const p1 = 3;
const p2 = -7;
const p3 = 2;
let sign = '';
let allProduct = p1*p2*p3;

if (allProduct < 0) {
       sign = '-';
}
else {
    sign = '+';
}

alert('The sign is ', sign);
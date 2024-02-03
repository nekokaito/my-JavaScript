function inchToFeet (inch) {
    let result = inch/12;
    return result.toFixed(2) + ' ft.';
}
console.log(inchToFeet(68));
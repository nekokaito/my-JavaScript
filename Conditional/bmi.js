var kg = 45;
var foot = 5.5;
var m = foot * 0.3048;
var BMI = kg / (m*m);

if (BMI < 18.5) {
    console.log("You are underweight.");
}
else if (BMI >= 18.5 && BMI <=24.9) {
    console.log("You are normal");
}
else if (BMI >=25 && BMI <= 29.9) {
    console.log("You are overweight");
}
else {
    console.log("You are obese");
}
// .....................................

console.log(BMI);
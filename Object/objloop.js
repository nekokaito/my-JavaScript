const Person = {
    name: 'Kaito',
    age: 23,
    weight: '56kg',
    occupation: 'coder and dev',
    married: false
}
for (const i in Person) {
    console.log(i);
    console.log(Person[i]);
}
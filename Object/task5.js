let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };

    for(const i in myObject) {
        console.log('key: ', i, ' | ', 'type: ', typeof myObject[i]);
    }
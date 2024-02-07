function deleteInvalids(array) {
    let newArray = [];

    if (Array.isArray(array)){
        
        for (let i of array) {
            
            if (typeof(i) === 'number' && !isNaN(i))
             
            newArray.push(i);

        }
         return newArray;
    }

    else {
        return 'Invalid Array';
    }
         
}

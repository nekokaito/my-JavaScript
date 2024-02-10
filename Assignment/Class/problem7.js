function findCommon (arr1, arr2) {
    let matched = [];

    for (const i of arr1) {
        if (arr2.includes(i)) {
            matched.push(i);
        }
    }
    return matched;
}

arr1 = [10, 0, 4, 3, 5];
arr2 = [7, 5, 3, 6, 9];

console.log(findCommon(arr1,arr2));
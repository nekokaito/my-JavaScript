function minArray (ar) {
    let min = ar[0];
   for (let i=0; i<ar.length;i++) {
     if (min> ar[i]) {
        min = ar[i];
     }
   }
     return min;
}

const heights2 = [167, 190, 120, 165, 137];
console.log(minArray(heights2));

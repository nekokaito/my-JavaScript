function oddAvg (n) {
        let count = 0;
        let sum = 0;
        let avg = 0;
    for (let i=0; i<n.length; i++) {
        if (n[i]%2 !== 0) {
            sum += n[i];
            count++;
        }
    }
    avg = sum /count;
    return avg;
}
let Avg = [12, 20, 30 ,25, 47];
console.log(oddAvg(Avg));
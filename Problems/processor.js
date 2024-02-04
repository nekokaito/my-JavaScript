const CPU = [
    {name: 'AMD Ryzen 3 3100', price: 8000, core:4 , hz:3.6},
    {name: 'Intel Core i3-10100', price: 10000, core:4 , hz:3.6},
    {name: 'AMD Ryzen 5 3600', price: 9500, core:6 , hz:3.6},
    {name: 'AMD Ryzen 5 5600G', price: 11500, core:6 , hz:3.6},
    {name: 'AMD Ryzen 7 3700X', price: 15000, core:8 , hz:3.8},
    {name: 'Intel Core i9-10900K', price: 48500, core:10 , hz:3.7},
]
  
function ExpensiveCPU(CPU) {
    let expensive = CPU[0];
    for (let cpuPrice of CPU) {
        if (expensive.price < cpuPrice.price) {
            expensive = cpuPrice;
        }
    }
    return expensive;
}
const mostExpensive = ExpensiveCPU(CPU);
console.log("Most Expensive Processor is: ",mostExpensive);


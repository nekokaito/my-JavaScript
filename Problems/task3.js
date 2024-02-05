function calculateElectronicsBudget (laptop, tablets, mobile) {
    
    let  laptopCost = 35000;
    let tabletCost = 15000;
    let mobileCost  = 20000;
    
    let totalCost = (laptopCost * laptop) + (tabletCost * tablets) + (mobileCost * mobile);
    return totalCost;
}

console.log(calculateElectronicsBudget(2,3,5), "You need to pay");
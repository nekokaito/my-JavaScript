function atm() {
    let balance = parseFloat(prompt("Enter your current balance:"));
    let amount = parseFloat(prompt("Enter the amount to withdraw:"));

    if (isNaN(balance) || isNaN(amount) || balance <= 0 || amount <= 0) {
        alert("Invalid input. Please enter valid amounts.");
        return;
    }

    if (amount > balance) {
        alert("Insufficient funds.");
        return;
    }

    finalBalance = balance - amount;
    alert("Withdrawal successful! Your new balance is: $" + finalBalance.toFixed(2));
}

atm();

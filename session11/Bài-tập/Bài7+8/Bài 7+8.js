"use strict";
class Account {
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    showMoney() {
        console.log(`Số tiền đang gửi: ${this.balance}đ`);
    }
    deposit(money) {
        this.balance += money;
        console.log(`Số tiền đang gửi: ${this.balance}đ`);
    }
    withdraw(money) {
        if (money <= this.balance) {
            this.balance -= money;
            console.log(`Đã rút ${money}đ`);
            console.log(`Số tiền còn lại đang gửi: ${this.balance}đ`);
        }
        else {
            console.log("Không đủ tiền!");
        }
    }
}
class SavingsAccount extends Account {
    constructor(accountNumber, initialBalance, interestRate) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }
    calculateInterest() {
        let monthlyInterest = (this.balance * this.interestRate) / 100;
        console.log(`Lãi hàng tháng: ${monthlyInterest}đ`);
    }
}
class CheckingAccount extends Account {
    constructor(accountNumber, balance, overdraftLimit) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(limitedMoney) {
        if (limitedMoney <= this.overdraftLimit && limitedMoney > 0) {
            if (limitedMoney <= this.balance) {
                this.balance -= limitedMoney;
                console.log(`Đã rút ${limitedMoney}đ`);
                console.log(`Số tiền còn lại đang gửi: ${this.balance}đ`);
            }
            else {
                console.log("Không đủ tiền!");
            }
        }
        else {
            console.log(`Số tiền rút chỉ tối đa ${this.overdraftLimit}đ`);
        }
    }
}
let savingsAccount = new SavingsAccount("1234567890", 1000000, 0.5);
// Tiền đang gửi
savingsAccount.showMoney();
//Lãi hàng tháng
savingsAccount.calculateInterest();
//Thêm tiền
savingsAccount.deposit(500000);
// Lãi hàng tháng
savingsAccount.calculateInterest();
// Rút tiền
savingsAccount.withdraw(1000000);
let checkingAccount = new CheckingAccount("18231220052005", 10000000, 5000000);
checkingAccount.withdraw(4000000);

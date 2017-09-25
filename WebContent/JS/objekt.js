'use strict';
class BankAcc {

    constructor(balance) {
        this._initBalance = balance;
        this._withdraws = [];
    }

    withdraw(amount) {
        let withD = this._withdraws;
        if (this.getBalance() - amount <= 0) {
            document.getElementById('info').innerHTML = 'Nicht genug Geld um ' + amount + ' abzuheben.';
        } else {
            withD.push(amount);
        }
    }

    getBalance() {
        let balance = this._initBalance;
        for (let wd of this._withdraws) {
            balance = balance - wd;
        }
        return balance;
    }

    showBalance() {
        let bal = document.getElementById('balance');
        return bal.innerHTML = this.getBalance();
    }
}

let a = new BankAcc(1000);
a.withdraw(200);
a.withdraw(500);
a.withdraw(800);

a.showBalance();
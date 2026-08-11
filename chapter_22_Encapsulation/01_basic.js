class Bank {
    #balance = 0; //cannot access outside


    deposite(amount) {
        if (amount > 0) {
            return this.#balance += amount;
        }
    }

    getamout() { //access privare variables by get and set methods
        return this.#balance;
    }
}
const bal = new Bank();
bal.deposite(300);

console.log(bal.getamout());
export default class Transaction {
    #date;
    #credit = '';
    #debit = '';
    #transactionDetails = [];

    constructor(date) {
        this.#date = date.replaceAll('-', '/');
    }

    get date() {
        return this.#date
    }
    get credit() {
        return this.#credit;
    }
    get debit() {
        return this.#debit;
    }
    get transactionDetails() {
        return this.#transactionDetails;
    }
    set credit(amount) {
        return this.#credit;
    }
    set debit(amount) {
        return this.#debit;
    }
    set transactionDetails(details) {
        this.#transactionDetails = details;
    }

    deposit(account, amount = 0) {
        if (amount >= 0) { this.#credit = (amount.toFixed(2)) } else { throw new Error('Invalid input') };
        account.balance = amount;
        let balance = account.balance.toFixed(2);
        this.transactionDetails = [this.#date, this.#credit, this.#debit, balance];
        account.transactionLog = this.#transactionDetails;
    }


    withdraw(account, amount = 0) {
        if ((amount <= account.balance) && (amount >= 0)) { this.#debit = (amount.toFixed(2)) } else { throw new Error('Invalid input') };
        account.balance = (-amount);
        let balance = account.balance.toFixed(2);
        this.transactionDetails = [this.#date, this.#credit, this.#debit, balance];
        account.transactionLog = this.#transactionDetails;
    }
}

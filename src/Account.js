export default class Account {
    #balance = 0;
    #transactionLog = [];

    get balance() {
        return this.#balance;
    }
    get transactionLog() {
        return this.#transactionLog;
    }

    set balance(amount) {
        return this.#balance += amount;
    }

    set transactionLog(transactionDetails) {
        this.#transactionLog.push(transactionDetails);
    }

}
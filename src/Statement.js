import chalk from 'chalk';
export default class Statement {
    #statement = `date       || credit  || debit   || balance\n`;

    constructor(account) {
        this.account = account;
    }
    get statement() {
        return this.#statement
    }
    set statement(transactions) {
        return this.#statement = transactions
    }

    formatStatement() {
        this.account.transactionLog.reverse();
        for (let i = 0; i < this.account.transactionLog.length; i++) {
            for (let j = 0; j < 4; j++) {
                switch (j) {
                    case 0:
                        this.#statement += this.account.transactionLog[i][j].padEnd(11, ' ') + `|| `;
                        break;
                    case 1:
                        (this.#statement += chalk.green(this.account.transactionLog[i][j].padEnd(8, ' ')) + `|| `);
                        break;
                    case 2:
                        (this.#statement += chalk.red(this.account.transactionLog[i][j].padEnd(8, ' ')) + `|| `);
                        break;
                    case 3:
                        this.#statement += chalk.green(this.account.transactionLog[i][j].padEnd(8, ' ')) + `\n`;
                        break;
                }

            }
        }
    }
}

//formatStatement method prior to extension task (padEnd was added previously):
/* formatStatement() {
        this.account.transactionLog.reverse();
         for (let i = 0; i < this.account.transactionLog.length; i++) {
            this.#statement += this.account.transactionLog.join(' || ')
            this.#statement+= '\n'
        }*/

//Previous code that adjusted width of columns based on the longest element in each column from each array
 // #dateColumnWidth = 4;
    // #creditColumnWidth = 6;
    // #debitColumnWidth = 5;
    // #balanceColumnWidth = 7;

    // get creditColumnWidth() {
    //     return this.#creditColumnWidth
    // }
    // get debitColumnWidth() {
    //     return this.#debitColumnWidth
    // }
    // get balanceColumnWidth() {
    //     return this.#balanceColumnWidth
    // }
    // get dateColumnWidth() {
    //     return this.#dateColumnWidth

// setColumnWidth() {
//     for (let i = 0; i < this.account.transactionLog.length; i++) {
//         for (let j = 0; j < 4; j++) {
//             let arrayElement = this.account.transactionLog[i][j]
//             switch (j) {
//                 case 0:
//                     if (arrayElement.length > this.#dateColumnWidth) { this.#dateColumnWidth = arrayElement.length }
//                     break;
//                 case 1:
//                     if (arrayElement.length > this.#creditColumnWidth) { this.#creditColumnWidth = arrayElement.length }
//                     break;
//                 case 2:
//                     if (arrayElement.length > this.#debitColumnWidth) { this.#debitColumnWidth = arrayElement.length }
//                     break;
//                 case 3:
//                     if (arrayElement.length > this.#balanceColumnWidth) { this.#balanceColumnWidth = arrayElement.length }
//                     break;
//             }
//         }
//     }
// }

// addToStatement() {
//     for (let i = 0; i < this.account.transactionLog.length; i++) {
//         for (let j = 0; j < 4; j++) {
//             let spaces = ' ';
//             let arrayElement = this.account.transactionLog[i][j]
//             switch (j) {
//                 case 0:
//                     spaces = " ".repeat((this.#dateColumnWidth - (arrayElement.length)))
//                     this.#statement += arrayElement + spaces + ` || `;
//                     break;
//                 case 1:
//                     spaces = " ".repeat(this.#creditColumnWidth - (arrayElement.length));
//                     (i === 0) ? (this.#statement += (arrayElement) + spaces + ` || `) : (this.#statement += chalk.green(arrayElement) + spaces + ` || `);
//                     break;
//                 case 2:
//                     spaces = " ".repeat(this.#debitColumnWidth - (arrayElement.length));
//                     (i === 0) ? (this.#statement += (arrayElement) + spaces + ` || `) : (this.#statement += chalk.red(arrayElement) + spaces + ` || `);
//                     break;
//                 case 3:
//                     spaces = " ".repeat(this.#balanceColumnWidth - (arrayElement.length));
//                     if (i === 0) {
//                         this.#statement += arrayElement + `${spaces}\n`
//                     } else if (arrayElement.includes('-')) {
//                         this.#statement += chalk.red(arrayElement) + `${spaces}\n`;
//                     } else { this.#statement += chalk.green(arrayElement) + `${spaces}\n`; }
//                     break;
//             }

//         }
//     }
// }

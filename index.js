import Account from "./src/Account.js";
import Statement from "./src/Statement.js";
import Transaction from "./src/Transaction.js";
import Print from "./src/Print.js";
import chalk from 'chalk';

//create new account
let account1 = new Account();
let transaction1 = new Transaction('10-01-2012')
let transaction2 = new Transaction('13-01-2012')
let transaction3 = new Transaction('14-01-2012')

//make deposit 1
transaction1.deposit(account1, 1000)

//make deposit 2
transaction2.deposit(account1, 2000)

//make withdrawal 1
transaction3.withdraw(account1, 500)

//print statement
let statement1 = new Statement(account1)
Print.printStatement(statement1);
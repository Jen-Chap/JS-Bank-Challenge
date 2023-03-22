# Bank
Note: Jasmine and Chalk need to be installed

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```
## Domain Model 

| Objects        | Properties                   | Messages                        | Outputs |
| -------------- | -------------------------    | ------------------------------  | ------- |
| Account        | #balance @Integer            | getBalance()                    | @Integer|
|                | #transactionLog @Array       | setBalance(@Integer)            | @Integer|
|                |                              | getTransactionLog()             | @Array  |
|                |                              | setTransactionLog(@Array)       | @Array  |
| Transaction    | #transactionDetails @Array   | getTransactionDetails()         | @Array  |
|                | #date @String                | setTransactionDetails(@Array)   | @Array  |
|                | #debit @String               | deposit(@Integer, @Account)     | @void   |
|                | #credit @String              | withdraw(@Integer, @Account)    | @void   |
| Statement      | #statement                   | formatStatement()               | @String |
| PrintStatement |                              | printStatement(@Statement)      | @String |

## Tests  
### Account Tests  
#balance returns a default value of 0 when getBalance is called'  
#balance property changes to 1000 when setBalance is called and 1000 is inputted, and getBalance is called  
#balance property changes to 1000 when setBalance is called and -1000 is inputted, and getBalance is called  

### Transaction Tests  
When a new transaction class is created with a date inputted, the #date property is formatted with "/"  
When the deposit method is called and no amount is given, the #credit is 0  
When the deposit method is called with amount 1, the #credit is 1  
When the deposit method is called with amount -1, an error is thrown  
When the deposit method is called, set balance in account should have been called  
When the deposit method is called, set transactionDetails should have been called  
When the deposit method is called, set transactionLog should have been called  
When the deposit method is called, with 1 inputted, transactionLog in accounts should return the transaction details   
When the deposit method is called twice, with 1 inputted each time, transactionLog in accounts should return the transaction details as 2 elements' //should this test and the previous be somewhere else?? not really testing a unit?  

when set transactionLog is called, #transactionLog array has a length of 1  
when set transactionLog is called, #transactionLog is equal to the input  

When set transactionDetails is called, #transactiondetails is an array with 4 elements  
When set transactionDetails is called, #transactiondetails is an array with the inputted elements  

When the withdraw method is called and no amount is given, the #debit is 0.00  
When the withdraw method is called and 1 is given, when account balance is 0, an error is thrown  
When the withdraw method is called and -1 is given, when account balance is 0, an error is thrown  
When the withdraw method is called and 1 is given, when account balance is 1, the #debit is 1.00  

### Statement Tests  
When the formatStatement method is called, each item in each array is added to the statement property as a string  
When the formatStatement method is called, spaces and lines are added to the statement property as a string between elements  
When the formatStatement method is called, new line is added to the statement property as a string between elements  

### Print Tests  
When Print.printStatement is called, console.log should have been called  
When Print.printStatement is called, formatStatement should have been called  

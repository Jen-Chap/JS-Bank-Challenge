import Account from '../src/Account.js';
import Transaction from '../src/Transaction.js'

describe('Transaction Tests', () => {
    let testTransaction;
    let testAccount;
    describe('Date Tests', () => {
        it('When a new transaction class is created with a date inputted, the #date property is formatted with "/"', () => {
            testTransaction = new Transaction('14-01-2012');
            expect(testTransaction.date).toBe('14/01/2012')
        })
    })
    describe('Deposit Tests', () => {
        describe('Deposit amount Tests', () => {
            beforeEach(() => {
                testTransaction = new Transaction('14-01-2012');
                testAccount = new Account()
            })
            afterEach(() => {
                testTransaction = undefined;
                testAccount = undefined;
            })
            it('When the deposit method is called and no amount is given, the #credit is 0.00', () => {
                testTransaction = new Transaction('14-01-2012');
                testTransaction.deposit(testAccount);
                expect(testTransaction.credit).toBe('0.00')
            })
            it('When the deposit method is called with amount 1, the #credit is 1.00', () => {
                testTransaction.deposit(testAccount, 1);
                expect(testTransaction.credit).toBe('1.00');
            })
            it('When the deposit method is called with amount -1, an error is thrown', () => {
                expect(() => { testTransaction.deposit(testAccount, -1) }).toThrowError('Invalid input')
            })
        })
        describe('Deposit calls Tests', () => {
            beforeEach(() => {
                testTransaction = new Transaction('14-01-2012');
                testAccount = new Account()
            })
            afterEach(() => {
                testTransaction = undefined;
                testAccount = undefined;
            })
            it('When the deposit method is called, set balance in account should have been called', () => {
                const balanceSpy = spyOnProperty(testAccount, `balance`, 'set');
                testTransaction.deposit(testAccount, 1);
                expect(balanceSpy).toHaveBeenCalled();
            })
            it('When the deposit method is called, setTransactionDetails should have been called', () => {
                const setTransactionDetailsSpy = spyOnProperty(testTransaction, 'transactionDetails', 'set');
                testTransaction.deposit(testAccount, 1);
                expect(setTransactionDetailsSpy).toHaveBeenCalled();
            })
            it('When the deposit method is called, setTransactionLog should have been called', () => {
                const setTransactionLogSpy = spyOnProperty(testAccount, 'transactionLog', 'set');
                testTransaction.deposit(testAccount, 1);
                expect(setTransactionLogSpy).toHaveBeenCalled();
            })
        })
        describe('fullfunctionality Tests', () => {
            beforeEach(() => {
                testTransaction = new Transaction('14-01-2012');
                testAccount = new Account();
            })
            afterEach(() => {
                testTransaction = undefined;
                testAccount = undefined;
            })
            it('When the deposit method is called, with 1 inputted, transactionLog in accounts should return the transaction details', () => {
                testTransaction.deposit(testAccount, 1);
                expect(testAccount.transactionLog).toEqual([['14/01/2012', '1.00', '', '1.00']]);
            })
            it('When the deposit method is called twice, with 1 inputted each time, transactionLog in accounts should return the transaction details as 2 elements', () => {
                testTransaction.deposit(testAccount, 1);
                testTransaction.deposit(testAccount, 1);
                expect(testAccount.transactionLog).toEqual([['14/01/2012', '1.00', '', '1.00'], ['14/01/2012', '1.00', '', '2.00']]);
            })
        })
    })
    describe('set transactionDetails Tests', () => {
        beforeEach(() => {
            testTransaction = new Transaction('14-01-2012');
        })
        afterEach(() => {
            testTransaction = undefined;
        })
        it('When setTransactionDetails is called, #transactiondetails is an array with 4 elements', () => {
            testTransaction.transactionDetails = [1, 2, 3, 4];
            expect(testTransaction.transactionDetails.length).toBe(4)
        })
        it('When setTransactionDetails is called, #transactiondetails is an array with the inputted elements', () => {
            testTransaction.transactionDetails = ['14/01/2012', '1.00', '', '1.00'];
            expect(testTransaction.transactionDetails).toEqual(['14/01/2012', '1.00', '', '1.00'])
        })
    })
    describe('withdraw Tests', () => {
        beforeEach(() => {
            testTransaction = new Transaction('14-01-2012');
            testAccount = new Account()
        })
        afterEach(() => {
            testTransaction = undefined;
            testAccount = undefined;
        })
        it('When the withdraw method is called and no amount is given, the #debit is 0.00', () => {
            testTransaction.withdraw(testAccount);
            expect(testTransaction.debit).toBe('0.00')
        })
        it('When the withdraw method is called and 1 is given, when account balance is 0, an error is thrown', () => {
            expect(() => { testTransaction.withdraw(testAccount, 1) }).toThrowError('Invalid input')
        })
        it('When the withdraw method is called and -1 is given, when account balance is 0, an error is thrown', () => {
            expect(() => { testTransaction.withdraw(testAccount, -1) }).toThrowError('Invalid input')
        })
        it('When the withdraw method is called and 1 is given, when account balance is 1, the #debit is 1.00', () => {
            testAccount.balance = 1;
            testTransaction.withdraw(testAccount, 1);
            expect(testTransaction.debit).toBe('1.00')
        })
        it('When the withdraw method is called, with 1 inputted, transactionLog in accounts should return the transaction details', () => {
            testAccount.balance = 2;
            testTransaction.withdraw(testAccount, 1);
            expect(testAccount.transactionLog).toEqual([['14/01/2012', '', '1.00', '1.00']]);
        })
    })
})
// describe('transaction Tests', () => {
//     beforeEach(() => {
//         testTransaction = new Transaction('14-01-2012');
//     })
//     afterEach(() => {
//         testTransaction = undefined;
//     })


//     it('When the transaction method is called with withdraw and 1, the #amount is -1', () => {
//         testTransaction.transaction('withdraw', 1);
//         expect(testTransaction.amount).toBe(-1);
//     })
//     it('When the transaction method is called with withdraw and -1, the #amount is -1', () => {
//         testTransaction.transaction('withdraw', -1);
//         expect(testTransaction.amount).toBe(-1);
//     })
//     it('When the transaction method is called with withdraw and 0, the #amount is 0', () => {
//         testTransaction.transaction('withdraw', 0);
//         expect(testTransaction.amount).toBe(0);

import Account from '../src/Account.js'

describe('Account Tests', () => {
    describe('Balance Tests', () => {
        let testAccount;
        beforeEach(() => {
            testAccount = new Account();
        })
        afterEach(() => {
            testAccount = undefined;
        })
        it('#balance returns a default value of 0 when getBalance is called', () => {
            expect(testAccount.balance).toBe(0)
        })
        it('#balance property changes to 1000 when setBalance is called and -1000 is inputted, and getBalance is called', () => {
            testAccount.balance = -1000
            expect(testAccount.balance).toBe(-1000);
        })
    })
    describe('setTransactionLog Tests', () => {
        let testAccount;
        beforeEach(() => {
            testAccount = new Account();
        })
        afterEach(() => {
            testAccount = undefined;
        })
        it('when setTransactionLog is called, #transactionLog array has a length of 1', () => {
            testAccount.transactionLog = [1, 2, 3, 4]
            expect(testAccount.transactionLog.length).toBe(1)
        })
        it('when setTransactionLog is called, #transactionLog is equal to the input', () => {
            testAccount.transactionLog = ['14/01/2012', '1.00', null, '1.00']
            expect(testAccount.transactionLog).toEqual([['14/01/2012', '1.00', null, '1.00']])
        })
    })

})


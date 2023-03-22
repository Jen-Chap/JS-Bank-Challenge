import Statement from "../src/Statement.js";
import Account from "../src/Account.js";

describe('Statement Tests', () => {
    describe('formatStatement Tests', () => {
        let testAccount;
        let testStatement;
        beforeEach(() => {
            testAccount = new Account();
            testAccount.transactionLog = ['0', '1', '2', '3']
            testStatement = new Statement(testAccount);
        })
        afterEach(() => {
            testStatement = undefined;
            testAccount = undefined;
        })

        it('When the formatStatement method is called, each item in each array is added to the statement property as a string', () => {
            testStatement.formatStatement();
            expect(testStatement.statement.includes('0')).toBeTrue()
        })
        it('When the formatStatement method is called, spaces and lines are added to the statement property as a string between elements', () => {
            testStatement.formatStatement();
            expect(testStatement.statement.includes(' || ')).toBeTrue()
        })
        it('When the formatStatement method is called, new line is added to the statement property as a string between elements', () => {
            testStatement.formatStatement();
            expect(testStatement.statement.includes('\n')).toBeTrue()
        })
        it('When the formatStatement method is called,the statement property returns the first element in arrary correctly formatted', () => {
            testStatement.formatStatement();
            expect(testStatement.statement.includes(`0          || `)).toBeTrue();
        })
        //Previous tests that adjusted width of columns based on the longest element in each column from each array
        // describe('NO LONGER USED setColumnWidth Tests', () => {
        //     it('When setColumnWidth is called, dateColumnWidth is equal to the longest string in the array', () => {
        //         testStatement.setColumnWidth();
        //         expect(testStatement.dateColumnWidth).toBe(10)
        //     })
        //     it('When setColumnWidth is called, creditColumnWidth is equal to the longest string in the array', () => {
        //         testStatement.setColumnWidth();
        //         expect(testStatement.creditColumnWidth).toBe(7)
        //     })
        //     it('When setColumnWidth is called, debitColumnWidth is equal to the longest string in the array', () => {
        //         testStatement.setColumnWidth();
        //         expect(testStatement.debitColumnWidth).toBe(6)
        //     })
        //     it('When setColumnWidth is called, balanceColumnWidth is equal to the longest string in the array', () => {
        //         testStatement.setColumnWidth();
        //         expect(testStatement.balanceColumnWidth).toBe(7)
        //     })
        // it('When the formatStatement method is called, setColumnWidth should have been called', () => {
        //     const columnWidthSpy = spyOn(testStatement, `setColumnWidth`);
        //     testStatement.formatStatement();
        //     expect(columnWidthSpy).toHaveBeenCalled();
        // })
        // it('When the formatStatement method is called, headers array is added to an empty transactionLog array so length is 1', () => {
        //     testStatement.formatStatement();
        //     expect(testAccount.transactionLog.length).toBe(1)
        // })
        // it('When the formatStatement method is called, the transactionLog array is reversed so [0] is the headers', () => {
        //     testStatement.formatStatement();
        //     expect(testAccount.transactionLog[0]).toEqual(['date', 'credit', 'debit', 'balance'])
        // }) it('When the formatStatement method is called, addToStatement should have been called', () => {
        //     const addToStatementSpy = spyOn(testStatement, `addToStatement`);
        //     testStatement.formatStatement();
        //     expect(addToStatementSpy).toHaveBeenCalled();
        // })
        // })
    })

})
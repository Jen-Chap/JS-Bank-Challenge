import Print from '../src/Print.js'
import Statement from '../src/Statement.js';
describe('Print Tests', () => {
    let mockAccount;
    let testStatement;
    beforeEach(() => {
        mockAccount = {
            transactionLog: [],
        }
        testStatement = new Statement(mockAccount);
    })
    afterEach(() => {
        mockAccount = undefined;
        testStatement = undefined;
    })
    it('When Print.printStatement is called, console.log should have been called', () => {
        let logSpy = spyOn(console, 'log');
        Print.printStatement(testStatement);
        expect(logSpy).toHaveBeenCalled();
    })
    it('When Print.printStatement is called, formatStatement should have been called', () => {
        let formatSpy = spyOn(testStatement, 'formatStatement');
        Print.printStatement(testStatement);
        expect(formatSpy).toHaveBeenCalled();
    })
})
export default class Print {
    static printStatement(statement) {
        statement.formatStatement();
        console.log(statement.statement)
    }
}
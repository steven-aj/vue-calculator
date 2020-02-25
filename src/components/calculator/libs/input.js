export default class Input {
    constructor() {
        this.leftSide = '';
        this.operator = '';
        this.rightSide = '';
    }

    setLeftSide(value) {
        this.leftSide += value;
    }

    setRightSide(value) {
        this.rightSide += value;
    }

    setOperator(symbol) {
        if (symbol === '=') return;
        this.operator = (symbol === 'x') ? '*' : symbol;
    }

    setExpression(lhs, op, rhs) {
        this.leftSide = lhs;
        this.rightSide = rhs;
        this.setOperator(op);
    }

    getExpressionString() {
        let {leftSide, rightSide, operator} = this;
        return `${leftSide} ${operator} ${rightSide}`;
    }

    reset() {
        this.setExpression('', '', '');
    }
}
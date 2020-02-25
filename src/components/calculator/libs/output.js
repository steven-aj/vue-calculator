export default class Output {
    constructor() {
        this.result = 0;
        this.hasResult = false;
    }

    evaluate(expression) {
        return new Promise((resolve, reject) => {
            if (isNaN( parseInt(expression) )) 
                return reject(false);
            else
                this.result = eval(expression);
                this.hasResult = true;
                return resolve(true);
        });
    }

    invert() {
        let string = new String(this.result);
        if (string.charAt(0) === '-') {
            let pos = string.slice(1, string.length);
            this.result = parseFloat( pos );
        }
        else 
            this.result = 0 - this.result;
    }

    percentage() {
        this.result = this.result / 100;
    }

    reset() {
        this.result = 0;
        this.hasResult = false;
    }
}
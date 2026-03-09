// simple calculator app using Vue 3
Vue.createApp({
    data() {
        return {
            number1: 0,
            number2: 0,
            operation: '+',
            result: ''
        };
    },
    methods: {
        calculate() {
            let res;
            switch (this.operation) {
                case '+':
                    res = this.number1 + this.number2;
                    break;
                case '-':
                    res = this.number1 - this.number2;
                    break;
                case '*':
                    res = this.number1 * this.number2;
                    break;
                case '/':
                    res = this.number2 !== 0 ? this.number1 / this.number2 : '∞';
                    break;
                default:
                    res = 'NaN';
            }
            this.result = res;
        }
    }
}).mount('#app');
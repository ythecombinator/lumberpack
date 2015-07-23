module.exports = {
    addTwoNumbers: function(a,b) {
        return a + b;
    },

    subTwoNumbers: function(a,b){
        return a - b;
    },

    multTwoNumbers: function(a,b){
        return a * b;
    },

    divideTwoNumbers: function(a,b){
        if (b !== 0)
            return a / b;
        else
            return 'You cant divide by 0';

    }
};

// put your code here
// remember, you can use modules with browserify
var calc = require('./calc');

console.log(calc.addTwoNumbers(5,5));
console.log(calc.subTwoNumbers(5,5));
console.log(calc.multTwoNumbers(5,5));
console.log(calc.divideTwoNumbers(10,1));
const fibonacci = function(num) {
    num = +num;

    if(Math.sign(num) === -1) return "OOPS";
    else if(num === 0) return 0;
    else if(num === 1 || num === 2) return 1;
    return (fibonacci(num-1) + fibonacci(num-2));
};

console.log(fibonacci(6));
console.log(typeof +'1');

// Do not edit below this line
module.exports = fibonacci;

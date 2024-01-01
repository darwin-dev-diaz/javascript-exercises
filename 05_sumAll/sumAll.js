const sumAll = function(a, b) {
    if(a < 0 || b < 0) return 'ERROR';
    if(typeof a !== 'number'|| typeof b !== 'number') return 'ERROR';

    let firstValue = a < b ? a : b;
    let lastValue = a > b ? a : b;

    const numOfValues = (lastValue - firstValue + 1);
    return (numOfValues * (lastValue + firstValue))/2
};

console.log(sumAll(1,4));
console.log(sumAll(1,'2'));
console.log(typeof '2');

// Do not edit below this line
module.exports = sumAll;

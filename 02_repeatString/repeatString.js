const repeatString = function(str, repetitions) {
    let strMultiplied = ''
    if(repetitions < 0) return 'ERROR';
    for(let i = 0; i < repetitions; i++){
        strMultiplied = strMultiplied + str
    }
    return strMultiplied;
};
// Do not edit below this line
module.exports = repeatString;

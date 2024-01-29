const palindromes = function (stringy) {
    const cleanedArr = stringy.match(/\w/g,' ').map((char=>char.toLowerCase()));

    return JSON.stringify(cleanedArr) === JSON.stringify(cleanedArr.reverse()) ? true : false;
};

console.log(palindromes('A car, a man, a maraca.'));
// Do not edit below this line
module.exports = palindromes;

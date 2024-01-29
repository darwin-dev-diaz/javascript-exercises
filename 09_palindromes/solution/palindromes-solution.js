const palindromes = function (string) {
  // lowercase the string and remove all non text characters
  const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");

  // return whether or not the reversed string is the same as the processed string
  return processedString.split("").reverse().join("") == processedString;
};

module.exports = palindromes;

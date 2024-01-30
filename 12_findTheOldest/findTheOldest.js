const findTheOldest = function(arrOfPeople) {
    const testArr = arrOfPeople.sort((a,b)=>{
        const aAge = a.yearOfDeath ? a.yearOfBirth - a.yearOfDeath : a.yearOfBirth - 2023;
        const bAge = b.yearOfDeath ? b.yearOfBirth - b.yearOfDeath : b.yearOfBirth - 2023;

        if(aAge > bAge) return 1;
        return -1;
    });

    return testArr[0];
};
    
    const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

console.log(findTheOldest(people));


// Do not edit below this line
module.exports = findTheOldest;

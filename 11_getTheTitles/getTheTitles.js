const getTheTitles = function(arrOfObjs) {
    return arrOfObjs.map((obj)=>obj.title);
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

  console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;


const removeFromArray = function (array, ...args) {
 
    const newArray = [];
    
    array.forEach((item) => {
   
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
  
    return newArray;
  };
  

console.table(removeFromArray(["banana","maça", "pera", "uva"],"uva", "maça"))
  module.exports = removeFromArray;
  
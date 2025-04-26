const removeFromArray = function(arr, ...values) {
    // if (arguments.length>2) {

    
    // let filteredArr = arr
    // for (const value of values) {
    //     filteredArr =  filteredArr.filter(item => item !== value);
    // }
    // return filteredArr;

    return arr.filter(val => !values.includes(val))
  
    
};

// Do not edit below this line
module.exports = removeFromArray;
 
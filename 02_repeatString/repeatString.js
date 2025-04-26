const repeatString = function(word, times) {
    // if (num < 0) return "ERROR";
    // let repeated = "";
    // for(let i =0; i<num; i++) {
    //     repeated+=string;
    // }
    // return repeated;

    if (times < 0) return "ERROR";
  let string = "";
  for (let i = 0; i < times; i++) {
    string += word;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
 